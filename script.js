
const loader = document.getElementById("loader");
const main = document.getElementById("main");
const envelope = document.getElementById("envelope");
const openBtn = document.getElementById("openBtn");
const letterScreen = document.getElementById("letterScreen");
const closeLetter = document.getElementById("closeLetter");
const message = document.getElementById("message");

window.addEventListener("load", () => {
  setTimeout(() => {
    loader.classList.add("hide");
  }, 2500);
});

// Floating hearts
const particles = document.getElementById("particles");

for (let i = 0; i < 22; i++) {
  const heart = document.createElement("span");
  heart.className = "particle";
  heart.textContent = Math.random() > 0.5 ? "♥" : "✦";
  heart.style.left = Math.random() * 100 + "%";
  heart.style.animationDuration = (8 + Math.random() * 12) + "s";
  heart.style.animationDelay = (Math.random() * 10) + "s";
  heart.style.fontSize = (9 + Math.random() * 12) + "px";
  particles.appendChild(heart);
}

// رسالة عادل إلى سما
const paragraphs = [
`إزيك يا سما ❤️

مش عارف أقولك الكلام ده ولا لأ، بس بجد أنا بقالي فترة طويلة نفسي أتكلم معاكي. وكان نفسي أبعتلك الكلام ده يوم الـ Happy Message، بس خوفت. كل مرة كنت بفتح الشات وأبدأ أكتب، كنت بمسح الكلام تاني، ومكنتش عارف أعمل إيه ولا أبدأ منين.`,

`بصي يا سما، أنا بقالي أربع سنين تقريباً نفسي أتكلم معاكي، ومن درس العربي وأنا واخد بالي منك. وكل مرة كنا بنشوف بعض ونضحك، كان نفسي أجيلك وأفتح معاكي كلام، بس مكنتش بعرف أبدأ إزاي.

يمكن المواقف دي كانت عادية بالنسبالك، بس بالنسبالي كانت بتفرق معايا، وكنت بفضل فاكرها حتى بعد ما الدرس يخلص.`,

`أنا بصراحة معجب بيكي، وبحبك، ونفسي تديني فرصة نتكلم ونتعرف على بعض أكتر. دخلت كلمتك عشان أنا بجد نفسي نبقى قريبين من بعض ونعرف بعض، مش أكتر.

بقالي أربع سنين كان نفسي أكلمك، بس كنت خايف من ردك، وخايف أكون فاهم حاجة غلط أو أزعل من الإجابة.`,

`وحتى امبارح لما شوفت فيديو على تيك توك، فضلت أفكر ومبقتش عارف الفيديو ده لمين، ولا إذا كان ليه علاقة بيا ولا لأ. بس بدل ما أفضل أخمن وأفكر لوحدي، قولت إني أكلمك وأكون صريح معاكي.`,

`أنا عيني كانت عليكي في الدرس على طول، وبصراحة كل ضحكة منك كانت بتفرحني. وكنت ساعات أقول في دماغي يا ترى ممكن في يوم نتكلم بجد؟

وكل ما أكلم صحابي يقعدوا يضحكوا ويقولولي: انسى يا عادل 😂، بس أنا كنت بفضل عندي أمل إننا ممكن نتكلم عادي، ومكنتش بحب أسمع كلامهم.`,

`وكنت ساعات بعمل ريبوستات على تيك توك، ويمكن كنت أتمنى تشوفيها وتفهمي إني أقصدك، بس مكنتش عارف أقولك الكلام ده بشكل مباشر.

أنا مش عارف إذا كنت اتوهمت إنك ممكن تكوني بتحسي بنفس إحساسي بسبب النظرات والضحك، ولا كنت فاهم غلط، وعشان كده مش عايز أفترض أي حاجة من عندي.`,

`عارفة يا سما، يمكن تكوني مش واخدة بالك إن فيه شخص بقاله أربع سنين شايل جواه كلام ليكي.

بدأت الحكاية من درس العربي، من غير كلام كتير، ومن غير اعترافات، مجرد نظرات بتتقابل وضحكات بسيطة، ولحظات يمكن بالنسبالك كانت عادية، لكنها بالنسبالي كانت بتفضل في بالي وقت طويل.

أربع سنين عدوا، وفيه حاجات كتير اتغيرت، لكن إنتِ لسه شخص مميز بالنسبالي.`,

`يمكن عمري ما عرفت أقولك الكلام ده، ويمكن كل مرة كان نفسي أبدأ كلام معاكي كنت بتردد ومش عارف أبدأ منين.

أنا مش بكتبلك الكلام ده علشان أضغط عليكي أو أستنى منك رد معين، أنا بس حابب تعرفي إن فيه حد كان بيستنى اللحظات الصغيرة اللي بيشوفك فيها، وكان بيفرح بضحكتك حتى لو مكنش بينكم كلام.`,

`أنا والله مش عايز أضيع وقتك ولا أدخل أكلمك لمجرد الكلام. أنا نفسي نتعرف على بعض بجد، ونتكلم ونفهم شخصيات بعض، ونشوف إذا كان فيه قبول وتفاهم بينا.

نفسي نحكي لبعض عن يومنا، ونهزر، ونتكلم في أي حاجة عادية، بدل ما نفضل مجرد اتنين كانوا بيبصوا لبعض ويضحكوا من بعيد.`,

`ومش عايزك تحسي إنك لازم توافقي علشان متزعلنيش، ولا إنك مطالبة تبادليني نفس إحساسي. أنا عايزك تقولي رأيك بصراحة، حتى لو محتاجة وقت تفكري.

ولو مش حابة نتكلم، هحترم قرارك ومش هضايقك.`,

`بس بجد يا سما، كان نفسي من زمان أخد الخطوة دي، وكنت كل مرة بأجلها بسبب خوفي من ردك.

ودلوقتي أنا أخيراً بقولك اللي جوايا، ومش عارف الكلام ده هيكون بدايته إيه، بس أتمنى يكون بداية إننا نتعرف على بعض بشكل أحسن.`,

`وفي الآخر، أنا مش طالب منك غير فرصة واحدة نتكلم فيها، ونعرف بعض أكتر، ومن غير استعجال ولا ضغط.

يمكن تكون بداية حكاية حلوة، ويمكن نكتشف إننا مش مناسبين لبعض، بس على الأقل نكون ادينا نفسنا فرصة.`,

`فـ يا سما، ممكن تديني فرصة نتكلم ونتعرف على بعض؟

أنا عادل، واللي بقالي أربع سنين كان نفسه يقولك الكلام ده، وأخيراً قدر ياخد الخطوة ❤️`
];

paragraphs.forEach((text) => {
  const p = document.createElement("p");
  p.textContent = text;
  message.appendChild(p);
});

// Open envelope
function openEnvelope() {
  envelope.classList.add("open");
  openBtn.disabled = true;
  openBtn.style.opacity = ".5";
  document.getElementById("hint").textContent = "رسالتك بتتفتح... ❤️";

  setTimeout(() => {
    main.style.display = "none";
    letterScreen.classList.add("show");
    window.scrollTo({ top: 0, behavior: "instant" });
  }, 1100);
}

openBtn.addEventListener("click", openEnvelope);
envelope.addEventListener("click", openEnvelope);

// Close letter
closeLetter.addEventListener("click", () => {
  letterScreen.classList.remove("show");
  main.style.display = "flex";
  envelope.classList.remove("open");
  openBtn.disabled = false;
  openBtn.style.opacity = "1";
  document.getElementById("hint").textContent =
    "اضغطي على الظرف وافتحي رسالتك ❤️";
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// Answers
document.getElementById("yesBtn").addEventListener("click", () => {
  document.getElementById("response").textContent =
    "هكون مبسوط إننا بدأنا نتكلم، وشكراً إنك اديتيني فرصة ❤️";
});

document.getElementById("thinkBtn").addEventListener("click", () => {
  document.getElementById("response").textContent =
    "خدي وقتك يا سما، ومفيش أي ضغط عليكي. ❤️";
});
