(function () {
            function ring(v, c) { var o = (264 * (1 - v / 100)).toFixed(0); return '<svg class="ring" viewBox="0 0 100 100"><circle cx="50" cy="50" r="42" fill="none" stroke="rgba(255,255,255,.12)" stroke-width="8"/><circle cx="50" cy="50" r="42" fill="none" stroke="' + c + '" stroke-width="8" stroke-linecap="round" stroke-dasharray="264" stroke-dashoffset="' + o + '" transform="rotate(-90 50 50)"/><text x="50" y="54" text-anchor="middle" fill="#fff" font-size="26" font-weight="700">' + v + '</text><text x="50" y="68" text-anchor="middle" fill="#9aabcf" font-size="9">/100</text></svg>' }
            function spark(s, up, c) { var p = [], y = up ? 55 : 15, i; for (i = 0; i < 40; i++) { y += (up ? -1 : 1) * (Math.sin(i * 1.3 + s) * 5 + 1.6); y = Math.max(6, Math.min(64, y)); p.push((i * 7.7).toFixed(0) + ',' + y.toFixed(0)) } return '<svg class="sp" viewBox="0 0 300 70" preserveAspectRatio="none" aria-hidden="true"><polyline fill="none" stroke="' + c + '" stroke-width="2" points="' + p.join(' ') + '"/></svg>' }
            var S = [
                { k: 'buy', t: 'BUY SIGNAL', s: 'LONG SETUP', p: 'BTC / USDT', px: '67,420.00', q: 78, e: '67,420', sl: '66,480', tp: '70,250', rr: '1:2.5', c: '#22e6b4', u: 1, sd: 1 },
                { k: 'sell', t: 'SELL SIGNAL', s: 'SHORT SETUP', p: 'ETH / USDT', px: '3,185.00', q: 65, e: '3,185', sl: '3,262', tp: '2,985', rr: '1:2.6', c: '#a06bff', u: 0, sd: 4 }];
            document.getElementById('sigs').innerHTML = S.map(function (d) { return '<div class="card sg ' + d.k + '"><h3>' + d.t + ' <small>' + d.s + '</small></h3><div class="row1"><div><div class="pair">' + d.p + '</div><div class="px">' + d.px + (d.u ? ' ↗' : ' ↘') + '</div></div>' + ring(d.q, d.c) + '</div><div class="st"><div>Entry<b>' + d.e + '</b></div><div>Stop-loss<b>' + d.sl + '</b></div><div>Take-profit<b>' + d.tp + '</b></div><div>Risk/Reward<b>' + d.rr + '</b></div><div>Quality<b>' + d.q + '/100</b></div></div>' + spark(d.sd, d.u, d.c) + '<div class="tag">Sample data for demonstration</div></div>' }).join('');
            document.getElementById('mr').innerHTML = ring(78, '#22e6b4');
            var R = [['BTC / USDT', 'Long', 78, '1:2.5'], ['ETH / USDT', 'Short', 65, '1:2.6'], ['SOL / USDT', 'Long', 72, '1:3.2'], ['BNB / USDT', 'Long', 70, '1:2.2'], ['LINK / USDT', 'Short', 60, '1:2.0']];
            document.getElementById('tb').innerHTML = R.map(function (r) { var l = r[1] === 'Long'; return '<tr><td>' + r[0] + '</td><td class="' + (l ? 'lg' : 'sh') + '">' + r[1] + '</td><td><span class="q" style="border-color:' + (l ? '#22e6b4' : '#a06bff') + '">' + r[2] + '</span></td><td>' + r[3] + '</td></tr>' }).join('');
        })();

(function () {
            var box = document.querySelector('.plans'), hl = document.getElementById('hl'), pl = [].slice.call(box.querySelectorAll('.plan')), cur = pl[1];
            box.insertAdjacentHTML('afterend', '<div class="card order" aria-live="polite"><div><b id="on"></b><span id="op"></span></div><a class="btn" id="ob" href="https://t.me/MySadak_Bot"></a></div>');
            function move() { hl.style.width = (cur.offsetWidth + 4) + 'px'; hl.style.height = (cur.offsetHeight + 4) + 'px'; hl.style.transform = 'translate(' + (cur.offsetLeft - 2) + 'px,' + (cur.offsetTop - 14) + 'px)' }
            function pick(el) { cur = el; pl.forEach(function (p) { p.setAttribute('aria-checked', p === el ? 'true' : 'false') }); document.getElementById('on').textContent = el.dataset.n; document.getElementById('op').textContent = el.dataset.p; document.getElementById('ob').textContent = 'Get ' + el.dataset.n + ' on Telegram'; move() }
            pl.forEach(function (p, i) { p.addEventListener('click', function () { pick(p) }); p.addEventListener('keydown', function (e) { var k = e.key, n = null; if (k === 'Enter' || k === ' ') { e.preventDefault(); pick(p) } else if (k === 'ArrowRight' || k === 'ArrowDown') { n = pl[(i + 1) % 3] } else if (k === 'ArrowLeft' || k === 'ArrowUp') { n = pl[(i + 2) % 3] } if (n) { e.preventDefault(); pick(n); n.focus() } }) });
            window.addEventListener('resize', move);
            hl.style.transition = 'none'; pick(cur);
            requestAnimationFrame(function () { requestAnimationFrame(function () { hl.style.transition = '' }) });
            if (document.fonts && document.fonts.ready) document.fonts.ready.then(function () { var t = hl.style.transition; hl.style.transition = 'none'; move(); requestAnimationFrame(function () { hl.style.transition = t }) });
        })();
