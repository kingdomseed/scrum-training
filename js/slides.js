    Reveal.initialize({
      hash: true,
      slideNumber: 'c/t',
      center: true,
      width: 1280,
      height: 720,
      plugins: [ RevealNotes ]
    });

    /* ---- Interactive Timer ---- */
    class SlideTimer {
      constructor(el) {
        this.el = el;
        this.totalSeconds = parseInt(el.dataset.minutes, 10) * 60;
        this.remaining = this.totalSeconds;
        this.interval = null;
        this.display = el.querySelector('.timer-compact');
        this.startBtn = el.querySelector('.timer-btn--start');
        this.resetBtn = el.querySelector('.timer-btn--reset');
        this.render();
        this.startBtn.addEventListener('click', () => this.toggle());
        this.resetBtn.addEventListener('click', () => this.reset());
      }
      render() {
        const m = Math.floor(this.remaining / 60);
        const s = this.remaining % 60;
        this.display.textContent = m + ':' + String(s).padStart(2, '0');
        this.display.classList.toggle('timer-warning', this.remaining > 0 && this.remaining <= 60);
        this.display.classList.toggle('timer-done', this.remaining === 0);
      }
      toggle() {
        if (this.interval) { clearInterval(this.interval); this.interval = null; this.startBtn.textContent = 'Start'; }
        else { this.interval = setInterval(() => this.tick(), 1000); this.startBtn.textContent = 'Pause'; }
      }
      tick() {
        if (this.remaining > 0) { this.remaining--; this.render(); }
        else { clearInterval(this.interval); this.interval = null; this.startBtn.textContent = 'Start'; }
      }
      reset() {
        clearInterval(this.interval); this.interval = null;
        this.remaining = this.totalSeconds;
        this.startBtn.textContent = 'Start';
        this.render();
      }
    }
    document.querySelectorAll('.timer-widget').forEach(el => new SlideTimer(el));

    /* ---- Drag & Drop Exercise ---- */
    (function() {
      let dragged = null;
      document.querySelectorAll('.drag-card').forEach(card => {
        card.addEventListener('dragstart', e => {
          dragged = card;
          card.classList.add('dragging');
          e.dataTransfer.effectAllowed = 'move';
        });
        card.addEventListener('dragend', () => {
          if (dragged) dragged.classList.remove('dragging');
          dragged = null;
          document.querySelectorAll('.drop-zone').forEach(z => z.classList.remove('drag-over'));
        });
      });
      document.querySelectorAll('.drop-zone').forEach(zone => {
        zone.addEventListener('dragover', e => { e.preventDefault(); zone.classList.add('drag-over'); });
        zone.addEventListener('dragleave', () => zone.classList.remove('drag-over'));
        zone.addEventListener('drop', e => {
          e.preventDefault();
          zone.classList.remove('drag-over');
          if (dragged) {
            zone.appendChild(dragged);
            dragged.classList.remove('dragging', 'correct', 'incorrect');
            dragged = null;
          }
        });
      });
      const src = document.getElementById('drag-source');
      if (src) {
        src.addEventListener('dragover', e => e.preventDefault());
        src.addEventListener('drop', e => {
          e.preventDefault();
          if (dragged) {
            src.appendChild(dragged);
            dragged.classList.remove('dragging', 'correct', 'incorrect');
            dragged = null;
          }
        });
      }
      const checkBtn = document.getElementById('drag-check-btn');
      if (checkBtn) {
        checkBtn.addEventListener('click', () => {
          document.querySelectorAll('.drop-zone').forEach(zone => {
            const role = zone.dataset.role;
            zone.querySelectorAll('.drag-card').forEach(card => {
              card.classList.remove('correct', 'incorrect');
              card.classList.add(card.dataset.answer === role ? 'correct' : 'incorrect');
            });
          });
        });
      }
      const resetBtn = document.getElementById('drag-reset-btn');
      if (resetBtn && src) {
        resetBtn.addEventListener('click', () => {
          document.querySelectorAll('.drag-card').forEach(card => {
            card.classList.remove('correct', 'incorrect');
            src.appendChild(card);
          });
        });
      }
    })();

    /* ---- Click-to-Navigate Slide Number ---- */
    Reveal.on('ready', () => {
      const slideNumberEl = document.querySelector('.reveal .slide-number');
      if (!slideNumberEl) return;
      slideNumberEl.style.cursor = 'pointer';

      slideNumberEl.addEventListener('click', (e) => {
        e.stopPropagation();
        const total = Reveal.getTotalSlides();
        const current = Reveal.getSlidePastCount() + 1;

        const input = document.createElement('input');
        input.type = 'number';
        input.min = 1;
        input.max = total;
        input.value = current;
        Object.assign(input.style, {
          position: 'fixed',
          bottom: '32px',
          left: '50%',
          transform: 'translateX(-50%)',
          width: '80px',
          padding: '6px 10px',
          fontSize: '16px',
          fontFamily: 'var(--font-body)',
          fontWeight: '700',
          border: 'var(--border-base)',
          boxShadow: 'var(--shadow-base)',
          background: '#fff',
          zIndex: '100',
          textAlign: 'center',
          borderRadius: '0'
        });

        document.body.appendChild(input);
        input.focus();
        input.select();

        function go() {
          const n = parseInt(input.value, 10);
          if (n >= 1 && n <= total) Reveal.slide(n - 1);
          cleanup();
        }
        function cleanup() {
          input.removeEventListener('keydown', onKey);
          input.removeEventListener('blur', go);
          if (input.parentNode) input.parentNode.removeChild(input);
        }
        function onKey(ev) {
          if (ev.key === 'Enter') { ev.preventDefault(); go(); }
          if (ev.key === 'Escape') { ev.preventDefault(); cleanup(); }
          ev.stopPropagation();
        }
        input.addEventListener('keydown', onKey);
        input.addEventListener('blur', go);
      });
    });

    /* ---- Live Clock ---- */
    function updateClock() {
      const now = new Date();
      const h = now.getHours();
      const m = String(now.getMinutes()).padStart(2, '0');
      const ampm = h >= 12 ? 'PM' : 'AM';
      const h12 = h % 12 || 12;
      document.getElementById('liveClock').textContent = h12 + ':' + m + ' ' + ampm;
    }
    updateClock();
    setInterval(updateClock, 15000);
