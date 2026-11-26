/* ZEITAKU: English / Arabic toggle (design prototype).
   Loads after app.js. English stays in the HTML; when Arabic is on, visible
   text is swapped from the dictionary below, the page turns right-to-left,
   and Amiri is loaded for the Arabic glyphs. The ZEITAKU wordmark never changes. */
(function () {
  const AR = {
    // shell
    'Collection 01 · Now online': 'المجموعة 01 · متاحة الآن',
    'Suits': 'بدلات', 'Blazers': 'سترات', 'Trousers': 'بناطيل', 'Coats': 'معاطف', 'Shop all': 'تسوّقي الكل', 'All': 'الكل',
    'The house': 'الدار', 'Contact': 'التواصل', 'Bag (2)': 'الحقيبة (2)', 'Close': 'إغلاق', 'Book a fitting': 'احجزي موعد قياس',
    'Tailored suits and workwear for women. Dress bold. Stay timeless.': 'بدلات وملابس عمل مفصّلة للمرأة. إطلالة جريئة. أناقة لا تزول.',
    'Join': 'اشتركي', 'Email': 'البريد الإلكتروني', 'Shop': 'المتجر', 'House': 'الدار', 'Help': 'المساعدة', 'Our story': 'قصتنا',
    'Size guide': 'دليل المقاسات', 'Shipping': 'الشحن', 'Returns': 'الإرجاع', 'Care': 'العناية',
    // toasts
    'Subscribed': 'تم الاشتراك', 'Added to your bag': 'أُضيفت إلى حقيبتك', 'Saved to wishlist': 'حُفظت في المفضلة',
    'Removed from wishlist': 'أُزيلت من المفضلة', 'Removed from bag': 'أُزيلت من الحقيبة', 'Design preview: payment comes later': 'معاينة التصميم: الدفع لاحقاً',
    'Message sent (preview)': 'تم إرسال الرسالة (معاينة)', 'Codes come later': 'رموز الخصم قريباً',
    // cards + products
    'View piece': 'عرض القطعة', 'New': 'جديد', 'Limited': 'إصدار محدود',
    'Obsidian': 'أسود', 'Champagne': 'شامبانيا', 'Taupe': 'ترابي', 'Ivory': 'عاجي',
    'Suit': 'بدلة', 'Blazer': 'سترة', 'Trouser': 'بنطال', 'Coat': 'معطف',
    'The Obsidian Double-Breasted': 'البدلة السوداء مزدوجة الصدر', 'The Sculpted Blazer': 'السترة المنحوتة', 'The Column Suit': 'البدلة المستقيمة',
    'The Champagne Suit': 'بدلة الشامبانيا', 'The Evening Blazer': 'سترة المساء', 'The Wide-Leg Trouser': 'البنطال الواسع',
    'The City Suit': 'بدلة المدينة', 'The Smoking Jacket': 'سترة السموكينغ', 'The Taupe Trouser Suit': 'البدلة الترابية',
    'The Straight Trouser': 'البنطال المستقيم', 'The Structured Overcoat': 'المعطف المهيكل', 'The Camel Coat': 'معطف الكاميل',
    // home
    'Collection 01': 'المجموعة 01', 'Dress bold.': 'إطلالة جريئة.', 'Stay timeless.': 'أناقة لا تزول.',
    'Suits and workwear cut for women who lead. Sharp lines, honest cloth, nothing loud.': 'بدلات وملابس عمل مفصّلة لامرأة تقود. خطوط حادة، أقمشة صادقة، بلا صخب.',
    'Shop the collection': 'تسوّقي المجموعة', 'New in': 'وصل حديثاً', 'The first': 'القطع', 'pieces': 'الأولى', 'View all': 'عرض الكل',
    'In Japanese it means': 'تعني باليابانية', 'luxury.': 'الفخامة.', 'We read it as a suit that still feels right in ten years.': 'ونراها بدلة تبقى مناسبة بعد عشر سنوات.',
    'The champagne edit': 'مختارات الشامبانيا', 'Soft colour,': 'لون ناعم،', 'hard lines.': 'وخطوط حادة.',
    'Our lightest suit, in a warm champagne wool that holds a crease from the first meeting to the last dinner.': 'أخف بدلاتنا، من صوف دافئ بلون الشامبانيا يحافظ على ثنيته من أول اجتماع حتى آخر عشاء.',
    'Shop the suit': 'تسوّقي البدلة', 'The evening edit': 'مختارات المساء', 'After six,': 'بعد السادسة،', 'still in charge.': 'ما زلتِ صاحبة القرار.',
    'Satin lapels, a sharper shoulder, and a black that stays black under any light.': 'ياقات من الساتان، كتف أكثر حدّة، وأسود يبقى أسود تحت أي ضوء.',
    'Shop the smoking jacket': 'تسوّقي سترة السموكينغ', 'Cut': 'القَصّة', 'Made for her frame': 'مصمّمة لقوامها',
    "Every pattern is drafted on a woman's body, not resized from menswear.": 'كل نموذج يُرسم على جسد امرأة، ولا يُعدَّل عن ملابس الرجال.',
    'Cloth': 'القماش', 'Honest fabrics': 'أقمشة صادقة', 'Wool, wool-silk and linen from mills we can name. No shine, no shortcuts.': 'صوف، وصوف مع حرير، وكتان من مصانع نعرفها بالاسم. بلا لمعان وبلا اختصارات.',
    'Fit': 'المقاس', "Come in or call us. We'll help you find your size and cut.": 'زورينا أو اتصلي بنا، وسنساعدك على إيجاد مقاسك وقصّتك.', 'Book now': 'احجزي الآن',
    // shop
    'Home': 'الرئيسية', 'The': '', 'collection': 'المجموعة',
    'Suits, blazers, trousers and coats in obsidian, champagne, taupe and ivory. Every piece is cut for women.': 'بدلات وسترات وبناطيل ومعاطف بالأسود والشامبانيا والترابي والعاجي. كل قطعة مفصّلة للمرأة.',
    'Sort': 'ترتيب', 'Featured': 'مختارات', 'Price: low to high': 'السعر: من الأقل إلى الأعلى', 'Price: high to low': 'السعر: من الأعلى إلى الأقل',
    'Quietly': 'قوة', 'powerful.': 'هادئة.', 'Shop the blazer': 'تسوّقي السترة',
    // product
    'Taxes included': 'شامل الضرائب',
    'Wool-silk twill with a peak lapel and a close waist. Half-canvassed so it moulds to you over time, and lined in burgundy.': 'تويل من الصوف والحرير بياقة مدببة وخصر محدد. نصف مبطّن بالكانفاس ليتشكّل على جسدك مع الوقت، ومبطّن باللون العنابي.',
    'Colour': 'اللون', 'Size (EU)': 'المقاس (أوروبي)', 'Pick a size first.': 'اختاري المقاس أولاً.', 'Add to bag': 'أضيفي إلى الحقيبة',
    'Free shipping and returns within 14 days': 'شحن وإرجاع مجاني خلال 14 يوماً', 'Need help with fit?': 'تحتاجين مساعدة في المقاس؟',
    'Details': 'التفاصيل', 'Peak lapel, double-breasted, six buttons': 'ياقة مدببة، صدر مزدوج، ستة أزرار', 'Half-canvassed front': 'واجهة نصف مبطّنة بالكانفاس',
    'Burgundy cupro lining': 'بطانة كوبرو عنابية', 'Matching trouser sold separately': 'البنطال المطابق يُباع منفصلاً', 'Fabric and care': 'القماش والعناية',
    "98% wool, 2% silk. Dry clean only. Steam, don't iron, to keep the lapel line.": '98% صوف و2% حرير. تنظيف جاف فقط. استخدمي البخار بدل المكواة للحفاظ على خط الياقة.',
    'Close at the waist, true to size. The model is 177 cm and wears size 36.': 'محددة عند الخصر ومطابقة للمقاس. طول العارضة 177 سم وترتدي المقاس 36.',
    'Shipping and returns': 'الشحن والإرجاع', 'Ships in 2 to 4 working days. Return unworn pieces within 14 days.': 'يُشحن خلال 2 إلى 4 أيام عمل. يمكن إرجاع القطع غير المستعملة خلال 14 يوماً.',
    'Complete the': 'أكملي', 'look': 'الإطلالة',
    // bag + checkout
    'Your': '', 'bag': 'حقيبتك', 'Remove': 'إزالة', 'Summary': 'الملخص', 'Subtotal': 'المجموع الفرعي', 'Free': 'مجاني', 'Promo code': 'رمز الخصم',
    'Apply': 'تطبيق', 'Total': 'الإجمالي', 'Checkout': 'إتمام الشراء', 'Keep shopping': 'متابعة التسوّق',
    'Taxes included. Free returns within 14 days.': 'شامل الضرائب. إرجاع مجاني خلال 14 يوماً.', 'You may': 'قد', 'also like': 'يعجبك أيضاً',
    'Bag': 'الحقيبة', '1 · Details': '1 · البيانات', '2 · Delivery': '2 · التوصيل', '3 · Payment': '3 · الدفع', 'Phone': 'الهاتف',
    'Delivery address': 'عنوان التوصيل', 'First name': 'الاسم الأول', 'Last name': 'اسم العائلة', 'Address': 'العنوان', 'City': 'المدينة',
    'Country': 'الدولة', 'Select country': 'اختاري الدولة', 'Jordan': 'الأردن', 'United Arab Emirates': 'الإمارات العربية المتحدة',
    'Saudi Arabia': 'السعودية', 'United Kingdom': 'المملكة المتحدة', 'United States': 'الولايات المتحدة', 'Delivery': 'التوصيل',
    'Standard · 2 to 4 days': 'عادي · من 2 إلى 4 أيام', 'Express · next day': 'سريع · في اليوم التالي', 'Payment': 'الدفع',
    'The payment form goes here when the store logic is built.': 'سيظهر نموذج الدفع هنا عند بناء منطق المتجر.', 'Place order': 'تأكيد الطلب', 'Your order': 'طلبك',
    // about
    'Luxury,': 'فخامة،', 'quietly.': 'بهدوء.',
    'Zeitaku is the Japanese word for luxury. Not the loud kind. The kind you notice when a jacket sits right on your shoulders, when a trouser falls straight, when a suit you bought years ago still looks like the best thing in the room.': 'زيتاكو كلمة يابانية تعني الفخامة. ليست الفخامة الصاخبة، بل تلك التي تلاحظينها حين تستقر السترة على كتفيك تماماً، وحين ينسدل البنطال باستقامة، وحين تبقى بدلة اشتريتها قبل سنوات أجمل ما في الغرفة.',
    "ZEITAKU makes that kind of suit for women. We draft every pattern on a woman's frame, choose fabrics we can name, and keep the colours to four: obsidian, champagne, taupe and ivory. Burgundy is the lining and nothing more.": 'تصنع زيتاكو هذا النوع من البدلات للمرأة. نرسم كل نموذج على قوام امرأة، ونختار أقمشة نعرف مصدرها، ونكتفي بأربعة ألوان: الأسود والشامبانيا والترابي والعاجي. أما العنابي فللبطانة فقط.',
    "We make fewer pieces and make them well. That's the whole idea.": 'نصنع قطعاً أقل، ونتقن صنعها. هذه هي الفكرة كلها.',
    'The cloth': 'القماش', 'Wool that': 'صوف', 'remembers.': 'يتذكّر.',
    'Wool and wool-silk twills, half-canvassed fronts and cupro linings. Fabrics that hold their shape and get better with wear.': 'تويل من الصوف والصوف مع الحرير، وواجهات نصف مبطّنة بالكانفاس، وبطانات من الكوبرو. أقمشة تحافظ على شكلها وتزداد جمالاً مع الاستعمال.',
    "Colours, and that's all": 'ألوان، لا أكثر', 'Collection at a time': 'مجموعة في كل مرة', 'Years each suit should last': 'سنوات على الأقل لكل بدلة',
    'Find your': 'اعثري على', 'first suit': 'بدلتك الأولى', 'Shop suits': 'تسوّقي البدلات',
    // contact
    'Book a': 'احجزي', 'fitting': 'موعد قياس',
    "Tell us what you're looking for and we'll help with size, cut and colour, in person or over a call.": 'أخبرينا بما تبحثين عنه وسنساعدك في المقاس والقصّة واللون، حضورياً أو عبر مكالمة.',
    'Phone and WhatsApp': 'الهاتف وواتساب', 'Fittings': 'مواعيد القياس', 'By appointment · Sunday to Thursday, 11:00 to 19:00': 'بموعد مسبق · من الأحد إلى الخميس، 11:00 حتى 19:00',
    'Name': 'الاسم', "I'm interested in": 'أنا مهتمة بـ', 'A fitting': 'موعد قياس', 'Sizing help': 'مساعدة في المقاس', 'An order': 'طلب',
    'Something else': 'أمر آخر', 'Preferred date': 'التاريخ المفضّل', 'Message': 'الرسالة', 'Send request': 'إرسال الطلب',
    // placeholders
    'Your email for new arrivals': 'بريدك الإلكتروني لأحدث القطع',
    "I'm looking for a black suit for work, usually a 38.": 'أبحث عن بدلة سوداء للعمل، مقاسي عادة 38.',
  };
  const PATTERNS = [
    [/^(\d+) pieces$/, (m) => `${m[1]} قطعة`],
    [/^Size (\d+)$/, (m) => `المقاس ${m[1]}`],
  ];

  let lang = 'en';
  try { lang = localStorage.getItem('zeitaku-lang') === 'ar' ? 'ar' : 'en'; } catch (e) {}

  function tr(s) {
    if (Object.prototype.hasOwnProperty.call(AR, s)) return AR[s];
    for (const [re, fn] of PATTERNS) { const m = s.match(re); if (m) return fn(m); }
    if (s.includes(' · ')) {
      const parts = s.split(' · ');
      const out = parts.map(p => (Object.prototype.hasOwnProperty.call(AR, p) ? AR[p] : (PATTERNS.find(([re]) => re.test(p)) ? tr(p) : p)));
      if (out.some((o, i) => o !== parts[i])) return out.join(' · ');
    }
    return null;
  }
  function trNode(n) {
    const raw = n.nodeValue, core = raw.trim();
    if (!core) return;
    const t = tr(core);
    if (t === null) return;
    n.nodeValue = t === '' ? '' : raw.replace(core, t);
  }
  function walk(root) {
    if (root.nodeType === 3) { if (!root.parentElement?.closest('.wm, script, style')) trNode(root); return; }
    if (root.nodeType !== 1 || root.closest('.wm')) return;
    const it = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, {
      acceptNode: (n) => (n.parentElement && n.parentElement.closest('.wm, script, style') ? NodeFilter.FILTER_REJECT : NodeFilter.FILTER_ACCEPT),
    });
    const nodes = []; while (it.nextNode()) nodes.push(it.currentNode);
    nodes.forEach(trNode);
    root.querySelectorAll('[placeholder]').forEach(el => { const t = tr(el.getAttribute('placeholder')); if (t) el.setAttribute('placeholder', t); });
  }

  /* Segmented EN / AR switch with a sliding champagne thumb. Lives in the black header,
     which keeps the same left-to-right layout in both languages so the switch never moves. */
  function addToggle() {
    const set = (to) => { if (to === lang) return; try { localStorage.setItem('zeitaku-lang', to); } catch (e) {} location.reload(); };
    const make = () => {
      const g = document.createElement('div');
      g.className = 'lang-switch'; g.setAttribute('role', 'group'); g.setAttribute('aria-label', lang === 'ar' ? 'اللغة' : 'Language');
      g.dataset.active = lang;
      g.innerHTML = '<span class="thumb" aria-hidden="true"></span>'
        + `<button type="button" lang="en" aria-pressed="${lang === 'en'}" aria-label="English">EN</button>`
        + `<button type="button" lang="ar" aria-pressed="${lang === 'ar'}" aria-label="العربية">AR</button>`;
      g.querySelectorAll('button').forEach(b => b.addEventListener('click', () => { g.dataset.active = b.lang; setTimeout(() => set(b.lang), 220); }));
      return g;
    };
    const tools = document.querySelector('.header .tools'); if (tools) tools.append(make());
  }

  addToggle();
  if (lang !== 'ar') return;

  const f = document.createElement('link'); f.rel = 'stylesheet';
  f.href = 'https://fonts.googleapis.com/css2?family=Amiri:wght@400;700&display=swap';
  document.head.appendChild(f);

  document.documentElement.lang = 'ar';
  document.documentElement.dir = 'rtl';
  walk(document.body);
  new MutationObserver(muts => muts.forEach(m => {
    if (m.type === 'characterData') walk(m.target);
    m.addedNodes.forEach(walk);
  })).observe(document.body, { subtree: true, childList: true, characterData: true });
})();
