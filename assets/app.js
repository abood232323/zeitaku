/* ZEITAKU storefront — design prototype only.
   Shared header/footer, placeholder product data, and click-through behaviour.
   No real cart, checkout or payment logic yet. Photos: Unsplash (free licence), hot-linked as placeholders. */

const IMG = (id, w = 1200) => `https://images.unsplash.com/photo-${id}?w=${w}&q=80&auto=format&fit=crop`;
const WM = '<span class="wm" aria-label="ZEITAKU"><span aria-hidden="true">ZEIT<span class="a">V</span>KU</span></span>';
const CUR = '$';

const PRODUCTS = [
  { id: 'obsidian-double-breasted', name: 'The Obsidian Double-Breasted', cat: 'suits', price: 690, colour: 'Obsidian', hex: '#111111', badge: 'New',
    imgs: ['1677246791501-85875b1ab187', '1730740505568-c0fe3fdb3b72', '1616065297556-f05bc00c9a3e'] },
  { id: 'sculpted-blazer', name: 'The Sculpted Blazer', cat: 'blazers', price: 420, colour: 'Obsidian', hex: '#111111',
    imgs: ['1616065297556-f05bc00c9a3e', '1748290880596-2a2c80530bc0', '1677246791501-85875b1ab187'] },
  { id: 'column-suit', name: 'The Column Suit', cat: 'suits', price: 640, colour: 'Obsidian', hex: '#111111',
    imgs: ['1614786269829-d24616faf56d', '1584273143981-41c073dfe8f8', '1724291025497-6c34e3b115d3'] },
  { id: 'champagne-suit', name: 'The Champagne Suit', cat: 'suits', price: 660, colour: 'Champagne', hex: '#C6BBAA', badge: 'New',
    imgs: ['1779406167603-d0afe0a4cdd7', '1779406166699-662a041a12a9', '1772714601004-23b94ae3913d'] },
  { id: 'evening-blazer', name: 'The Evening Blazer', cat: 'blazers', price: 460, colour: 'Obsidian', hex: '#111111',
    imgs: ['1724291025497-6c34e3b115d3', '1730740505058-940a95ba4643', '1616065297556-f05bc00c9a3e'] },
  { id: 'wide-leg-trouser', name: 'The Wide-Leg Trouser', cat: 'trousers', price: 240, colour: 'Ivory', hex: '#F8F6F0',
    imgs: ['1773859095499-ce1b6d3be9f3', '1767329300783-78ee1201a4cd', '1779406166699-662a041a12a9'] },
  { id: 'city-suit', name: 'The City Suit', cat: 'suits', price: 620, colour: 'Obsidian', hex: '#111111',
    imgs: ['1584273143981-41c073dfe8f8', '1614786269829-d24616faf56d', '1693747710746-90fc5941a8fd'] },
  { id: 'smoking-jacket', name: 'The Smoking Jacket', cat: 'blazers', price: 480, colour: 'Obsidian', hex: '#111111', badge: 'Limited',
    imgs: ['1693746943950-fbad52308296', '1693746943973-c654ff84170c', '1693746943964-e1da51ebc16d'] },
  { id: 'taupe-trouser-suit', name: 'The Taupe Trouser Suit', cat: 'suits', price: 650, colour: 'Taupe', hex: '#A89F93',
    imgs: ['1690085028725-481caf2f27db', '1622018168567-2a19663b6c3b', '1773859095499-ce1b6d3be9f3'] },
  { id: 'straight-trouser', name: 'The Straight Trouser', cat: 'trousers', price: 220, colour: 'Obsidian', hex: '#111111',
    imgs: ['1693747710746-90fc5941a8fd', '1614786269829-d24616faf56d', '1584273143981-41c073dfe8f8'] },
  { id: 'structured-overcoat', name: 'The Structured Overcoat', cat: 'coats', price: 780, colour: 'Obsidian', hex: '#111111',
    imgs: ['1596451984032-aee3a42eb723', '1730740505568-c0fe3fdb3b72', '1748290880596-2a2c80530bc0'] },
  { id: 'camel-coat', name: 'The Camel Coat', cat: 'coats', price: 760, colour: 'Champagne', hex: '#C6BBAA',
    imgs: ['1622018168567-2a19663b6c3b', '1619914777336-362bf3834ebd', '1690085028725-481caf2f27db'] },
];
const CATS = { all: 'All', suits: 'Suits', blazers: 'Blazers', trousers: 'Trousers', coats: 'Coats' };
const byId = id => PRODUCTS.find(p => p.id === id) || PRODUCTS[0];
const money = n => CUR + n.toLocaleString('en-US');

/* ---------- shell ---------- */
function shell() {
  const page = document.body.dataset.page;
  const cur = (p) => (page === p ? ' aria-current="page"' : '');
  const header = `
  <div class="announce">Collection 01 · Now online</div>
  <header class="header"><div class="wrap">
    <nav class="nav" aria-label="Main">
      <a href="shop.html?cat=suits"${cur('suits')}>Suits</a>
      <a href="shop.html?cat=blazers"${cur('blazers')}>Blazers</a>
      <a href="shop.html?cat=trousers"${cur('trousers')}>Trousers</a>
      <a href="shop.html"${cur('shop')}>Shop all</a>
    </nav>
    <button class="menu-btn" aria-label="Open menu" aria-expanded="false" id="menu-btn"><span></span></button>
    <a class="brand" href="index.html" aria-label="ZEITAKU home">${WM}</a>
    <div class="tools">
      <a class="hide-m" href="about.html"${cur('about')}>The house</a>
      <a class="hide-m" href="contact.html"${cur('contact')}>Contact</a>
      <a href="bag.html"${cur('bag')}>Bag (2)</a>
    </div>
  </div></header>
  <div class="drawer" id="drawer" aria-hidden="true">
    <button class="close" id="drawer-close">Close</button>
    <nav aria-label="Mobile">
      <a href="shop.html?cat=suits">Suits</a><a href="shop.html?cat=blazers">Blazers</a>
      <a href="shop.html?cat=trousers">Trousers</a><a href="shop.html?cat=coats">Coats</a>
      <a href="shop.html">Shop all</a><a href="about.html">The house</a><a href="contact.html">Contact</a>
    </nav>
    <div class="foot"><a href="bag.html">Bag (2)</a><a href="contact.html">Book a fitting</a></div>
  </div>`;
  const footer = `
  <footer class="footer"><div class="wrap">
    <div class="top">
      <div>${WM}
        <p style="max-width:34ch;margin:18px 0 0">Tailored suits and workwear for women. Dress bold. Stay timeless.</p>
        <form class="news" onsubmit="event.preventDefault();toast('Subscribed')">
          <label for="news-email" class="sr-only">Email</label>
          <input id="news-email" type="email" placeholder="Your email for new arrivals" required>
          <button type="submit">Join</button>
        </form>
      </div>
      <div><h4>Shop</h4><ul><li><a href="shop.html?cat=suits">Suits</a></li><li><a href="shop.html?cat=blazers">Blazers</a></li><li><a href="shop.html?cat=trousers">Trousers</a></li><li><a href="shop.html?cat=coats">Coats</a></li></ul></div>
      <div><h4>House</h4><ul><li><a href="about.html">Our story</a></li><li><a href="contact.html">Book a fitting</a></li><li><a href="contact.html">Contact</a></li></ul></div>
      <div><h4>Help</h4><ul><li><a href="#">Size guide</a></li><li><a href="#">Shipping</a></li><li><a href="#">Returns</a></li><li><a href="#">Care</a></li></ul></div>
    </div>
    <div class="bottom"><span>© 2026 ZEITAKU</span><span>Instagram · TikTok · Pinterest</span></div>
  </div></footer>
  <div class="toast" id="toast" role="status" aria-live="polite"></div>`;
  document.body.insertAdjacentHTML('afterbegin', header);
  document.body.insertAdjacentHTML('beforeend', footer);

  const drawer = document.getElementById('drawer'), btn = document.getElementById('menu-btn');
  const set = (o) => { drawer.classList.toggle('open', o); drawer.setAttribute('aria-hidden', !o); btn.setAttribute('aria-expanded', o); document.body.style.overflow = o ? 'hidden' : ''; };
  btn.addEventListener('click', () => set(true));
  document.getElementById('drawer-close').addEventListener('click', () => set(false));
}

let toastT;
function toast(msg) {
  const t = document.getElementById('toast'); t.textContent = msg; t.classList.add('show');
  clearTimeout(toastT); toastT = setTimeout(() => t.classList.remove('show'), 2200);
}

/* ---------- product card ---------- */
function card(p) {
  return `<a class="pcard" href="product.html?id=${p.id}">
    <div class="ph">${p.badge ? `<span class="badge">${p.badge}</span>` : ''}
      <img src="${IMG(p.imgs[0], 800)}" alt="${p.name}" loading="lazy">
      <img class="alt" src="${IMG(p.imgs[1], 800)}" alt="" loading="lazy">
      <span class="quick">View piece</span></div>
    <div class="meta"><span class="nm">${p.name}</span><span class="pr">${money(p.price)}</span></div>
    <div class="sub"><span class="dot" style="background:${p.hex}"></span>${p.colour} · ${CATS[p.cat].replace(/s$/, '')}</div>
  </a>`;
}
function renderInto(sel, list) { const el = document.querySelector(sel); if (el) el.innerHTML = list.map(card).join(''); }

/* ---------- pages ---------- */
function home() {
  renderInto('#new-in', ['obsidian-double-breasted', 'champagne-suit', 'smoking-jacket', 'sculpted-blazer'].map(byId));
}

function shop() {
  const params = new URLSearchParams(location.search);
  let cat = CATS[params.get('cat')] ? params.get('cat') : 'all';
  let sort = 'featured';
  const grid = document.getElementById('shop-grid');
  const title = document.getElementById('shop-title');
  const count = document.getElementById('shop-count');
  const tabs = document.getElementById('tabs');
  tabs.innerHTML = Object.entries(CATS).map(([k, v]) => `<button class="tab" data-cat="${k}" aria-pressed="${k === cat}">${v}</button>`).join('');
  const brk = `<div class="editorial-break"><img src="${IMG('1730740505058-940a95ba4643', 1200)}" alt="" loading="lazy">
    <div class="in"><span class="caps" style="color:var(--ivory)">The evening edit</span><div class="h2">Quietly <em>powerful.</em></div><a class="link" href="product.html?id=evening-blazer" style="align-self:flex-start;color:var(--ivory)">Shop the blazer</a></div></div>`;
  function draw() {
    let list = PRODUCTS.filter(p => cat === 'all' || p.cat === cat);
    if (sort === 'low') list = [...list].sort((a, b) => a.price - b.price);
    if (sort === 'high') list = [...list].sort((a, b) => b.price - a.price);
    const html = list.map(card);
    if (cat === 'all' && sort === 'featured' && html.length > 5) html.splice(5, 0, brk);
    grid.innerHTML = html.join('');
    title.innerHTML = cat === 'all' ? 'The <em>collection</em>' : `${CATS[cat]}`;
    document.body.dataset.page = cat === 'all' ? 'shop' : cat;
    count.textContent = `${list.length} pieces`;
    document.querySelectorAll('.nav a').forEach(a => a.removeAttribute('aria-current'));
    const navMatch = [...document.querySelectorAll('.nav a')].find(a => a.getAttribute('href') === (cat === 'all' ? 'shop.html' : `shop.html?cat=${cat}`));
    if (navMatch) navMatch.setAttribute('aria-current', 'page');
  }
  tabs.addEventListener('click', e => {
    const b = e.target.closest('.tab'); if (!b) return;
    cat = b.dataset.cat; tabs.querySelectorAll('.tab').forEach(t => t.setAttribute('aria-pressed', t === b));
    history.replaceState(null, '', cat === 'all' ? 'shop.html' : `shop.html?cat=${cat}`); draw();
  });
  document.getElementById('sort').addEventListener('change', e => { sort = e.target.value; draw(); });
  draw();
}

function product() {
  const p = byId(new URLSearchParams(location.search).get('id'));
  document.title = `${p.name} · ZEITAKU`;
  document.getElementById('crumb-cat').textContent = CATS[p.cat]; document.getElementById('crumb-cat').href = `shop.html?cat=${p.cat}`;
  document.getElementById('crumb-name').textContent = p.name;
  document.getElementById('p-name').textContent = p.name;
  document.getElementById('p-cat').textContent = `${CATS[p.cat].replace(/s$/, '')} · Collection 01`;
  document.getElementById('p-price').innerHTML = `${money(p.price)}<small>Taxes included</small>`;
  document.getElementById('p-colour').textContent = p.colour;
  const main = document.getElementById('main-img');
  const thumbs = document.getElementById('thumbs');
  main.src = IMG(p.imgs[0], 1400); main.alt = p.name;
  thumbs.innerHTML = p.imgs.map((id, i) => `<button aria-label="View image ${i + 1}" aria-current="${i === 0}" data-id="${id}"><img src="${IMG(id, 200)}" alt=""></button>`).join('');
  thumbs.addEventListener('click', e => { const b = e.target.closest('button'); if (!b) return; main.src = IMG(b.dataset.id, 1400); thumbs.querySelectorAll('button').forEach(x => x.setAttribute('aria-current', x === b)); });

  const colours = [['Obsidian', '#111111'], ['Champagne', '#C6BBAA'], ['Taupe', '#A89F93'], ['Ivory', '#F8F6F0']];
  const sw = document.getElementById('swatches');
  sw.innerHTML = colours.map(([n, h]) => `<button class="swatch" style="background:${h}" aria-label="${n}" aria-pressed="${n === p.colour}" data-n="${n}"></button>`).join('');
  sw.addEventListener('click', e => { const b = e.target.closest('.swatch'); if (!b) return; sw.querySelectorAll('.swatch').forEach(x => x.setAttribute('aria-pressed', x === b)); document.getElementById('p-colour').textContent = b.dataset.n; });

  const sizes = document.getElementById('sizes');
  sizes.innerHTML = ['34', '36', '38', '40', '42', '44'].map(s => `<button class="size" aria-pressed="false" ${s === '44' ? 'disabled' : ''}>${s}</button>`).join('');
  sizes.addEventListener('click', e => { const b = e.target.closest('.size'); if (!b || b.disabled) return; sizes.querySelectorAll('.size').forEach(x => x.setAttribute('aria-pressed', x === b)); document.getElementById('size-err').hidden = true; });

  document.getElementById('add').addEventListener('click', () => {
    if (!sizes.querySelector('[aria-pressed="true"]')) { document.getElementById('size-err').hidden = false; return; }
    toast('Added to your bag');
  });
  const fav = document.getElementById('fav');
  fav.addEventListener('click', () => { const on = fav.getAttribute('aria-pressed') !== 'true'; fav.setAttribute('aria-pressed', on); fav.textContent = on ? '♥' : '♡'; toast(on ? 'Saved to wishlist' : 'Removed from wishlist'); });

  renderInto('#look', PRODUCTS.filter(x => x.id !== p.id && (x.cat !== p.cat || x.colour === p.colour)).slice(0, 4));
}

function bag() {
  const items = [[byId('obsidian-double-breasted'), '38', 1], [byId('wide-leg-trouser'), '36', 1]];
  const lines = document.getElementById('lines');
  lines.innerHTML = items.map(([p, s, q], i) => `<div class="line" data-i="${i}">
    <a class="ph" href="product.html?id=${p.id}"><img src="${IMG(p.imgs[0], 400)}" alt="${p.name}"></a>
    <div class="d"><a class="h3" href="product.html?id=${p.id}">${p.name}</a><span class="muted">${p.colour} · Size ${s}</span>
      <div class="qty"><button aria-label="Decrease" data-d="-1">−</button><span>${q}</span><button aria-label="Increase" data-d="1">+</button></div></div>
    <div class="r"><span class="lp">${money(p.price * q)}</span><button class="rm">Remove</button></div></div>`).join('');
  const total = () => {
    let sub = 0; lines.querySelectorAll('.line').forEach(l => { const p = items[+l.dataset.i][0]; const q = +l.querySelector('.qty span').textContent; sub += p.price * q; l.querySelector('.lp').textContent = money(p.price * q); });
    document.getElementById('sub').textContent = money(sub); document.getElementById('tot').textContent = money(sub);
  };
  lines.addEventListener('click', e => {
    const d = e.target.closest('[data-d]'); const rm = e.target.closest('.rm');
    if (d) { const s = d.parentElement.querySelector('span'); s.textContent = Math.max(1, +s.textContent + +d.dataset.d); total(); }
    if (rm) { rm.closest('.line').remove(); total(); toast('Removed from bag'); }
  });
  total();
  renderInto('#also', ['sculpted-blazer', 'straight-trouser', 'structured-overcoat', 'champagne-suit'].map(byId));
}

function checkout() {
  const items = [[byId('obsidian-double-breasted'), '38'], [byId('wide-leg-trouser'), '36']];
  document.getElementById('mini').innerHTML = items.map(([p, s]) => `<div class="mini"><img src="${IMG(p.imgs[0], 200)}" alt=""><div><div style="font-family:var(--head);font-size:16px">${p.name}</div><div class="muted">Size ${s}</div></div><span>${money(p.price)}</span></div>`).join('');
  document.getElementById('co-form').addEventListener('submit', e => { e.preventDefault(); toast('Design preview: payment comes later'); });
}

function contact() {
  document.getElementById('contact-form').addEventListener('submit', e => { e.preventDefault(); e.target.reset(); toast('Message sent (preview)'); });
}

shell();
({ home, shop, product, bag, checkout, contact }[document.body.dataset.view] || (() => {}))();
