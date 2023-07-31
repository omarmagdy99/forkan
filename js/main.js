let notifyCount = 4;
document.write(`
<div class="offcanvas offcanvas-start" tabindex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
  <div class="offcanvas-header">
    <h5 class="offcanvas-title" id="offcanvasExampleLabel">الإشعارات</h5>
    <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
  </div>
  <div class="offcanvas-body">
    <div>
      حافظ على مراجعة الإشعارات حتى تعلم التكليفات التي في الدرس
    </div>
    <div class="dropdown mt-3">
      <table class="table table-primary">
        <tr class="table-dark">
          <th class="table-dark">العقيدة </th>
        </tr>
        <tr class="table-warning">
          <td class="table-warning">مراجعة باب توحيد الإلوهية والربوبية والأسماء و الصفات </td>
        </tr>
      </table>

      <table class="table table-primary">
        <tr>
          <th class="table-dark">التجويد</th>
        </tr>

        <tr>
          <td class="table-warning">الواجب سورة الطارق (إستخرج أحكام التجويد)
          </td>
        </tr>
        <tr>
          <td class="table-warning">إمتحان المره القادمة
          </td>
        </tr>

      </table>
      <div class="p-2 bg-secondary text-white text-center fs-3">
        <p>يمكنكم معرفة جميع واجبات التجويد من خلال الرابط التالي</p>
        <a href="tagwid.html" class="btn btn-primary rounded">من هنا</a>
      </div>
    </div>
  </div>
</div>

`);

document.getElementById("navbar").innerHTML += `
<div class="container-fluid">
  <a class=" navbar-brand " href="index.html" id="logoFor">الفرقان</a>
  <button class="navbar-toggler bg-dark " type="button" data-bs-toggle="collapse"
    data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
    aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
    <ul class="navbar-nav me-5 mb-5 mb-lg-0">
      ${ELM}
      <li class="nav-item">
        <a class="nav-link active  " aria-current="page" href="index.html">الجدول</a>
      </li>
      <li class="nav-item">
        <a class="nav-link active  mx-lg-3  notifyRemovePc"  aria-current="page" data-bs-toggle="offcanvas"
          href="#offcanvasExample" role="button" aria-controls="offcanvasExample" onclick="notifyRemove()">
          الاشعارات <span class="badge bg-danger notify " >${notifyCount}</span>
        </a>
      </li>
      <li class="nav-item">
        <a class="nav-link active  mx-lg-2" aria-current="page" href="fqh.html">الفقه</a>
      </li>
      <li class="nav-item">
        <a class="nav-link active  mx-lg-2" aria-current="page" href="aqidh.html">العقيدة</a>
      </li>
      <li class="nav-item">
        <a class="nav-link active  mx-lg-2" aria-current="page" href="nawawy.html">الحديث</a>
      </li>
      <li class="nav-item">
        <a class="nav-link active  mx-lg-2" aria-current="page" href="tagwid.html">التجويد</a>
      </li>
      <li class="nav-item">
        <a class="nav-link active  mx-lg-2" aria-current="page" href="tzkia.html">التزكية</a>
      </li>


    </ul>

  </div>
</div>


<div id="notifyIcon" class=" notifyRemoveMob position-fixed text-center bg-white p-1 " aria-current="page" data-bs-toggle="offcanvas"
href="#offcanvasExample" role="button" aria-controls="offcanvasExample" onclick="notifyRemove()">
<span class="badge bg-danger notify position-absolute">${notifyCount}</span>
<i class="fa-solid fa-bell  position-absolute notfyAlarm"></i>
</div>
<!-- scroll top button -->
<button class="scrollTop bg-dark position-fixed pt-1">
    <i class="fa-solid fa-arrow-up text-white"></i>
</button>
<!-- scroll top button -->

`;

// notification button
let notifyRemoveMob = document.querySelector(".notifyRemoveMob");
let notifyIcon = document.querySelector("#notifyIcon");
let removeNotifyPc;
let notify = document.querySelectorAll(".notify");
if (localStorage.getItem("notify")) {
  notify.forEach((not) => {
    not.classList.add("d-none");
  });
  notifyIcon.classList.add("d-none");
}

function notifyRemove() {
  window.localStorage.setItem("notify", "click");
  notify.forEach((not) => {
    not.classList.add("d-none");
  });
  notifyIcon.classList.add("d-none");
}
// notification button

// scroll to top
let scrollBtn = document.querySelector(".scrollTop");
window.onscroll = () => {
  if (window.scrollY <= 200) {
    scrollBtn.style.cssText = "bottom:-70px;";
  } else {
    scrollBtn.style.cssText = "bottom:20px;";
  }
};
scrollBtn.addEventListener("click", () => {
  scrollTo({
    left: 0,
    top: 0,
    behavior: "smooth",
  });
});
// scroll to top

// start fqh data
let fqhData = {
  unit1: [
    "المسألة الأولى: في التعريف بالطهارة وأهميتها ص 1",
    "المسألة الثانية : الماء الذي تحصل به الطهارة ص 2   ",
    "المسألة الثالثة : الماء إذا خالطته نجاسة  ص 2 ",
    "المسألة الرابعة : الماء إذا خالطه طاهر  ص 3 ",
    "المسألة الخامسة : حكم الماء المستعمل  في الطهارة  ص 4",
    "المسألة السادسة : أسار الأدميين وبهيمة الأنعام  ص 4",
  ],
  unit2: [
    "المسألة الأولى : إستعمال أنية الذهب والفضة وغيرهما في الطهارة  ص 6 ",
    "المسألة  الثانية : حكم استعمال الإناء المضبب بالذهب والفضة  ص  6",
    "المسألة  الثالثة : أنية الكفار  ص 7 ",
    "المسألة الرابعة : الطهارة في الأنية المتخذة من جلود الميتة  ص 7  ",
  ],
  unit3: [
    "المسألة الأولى : الإستنجاء و الإستجمار وقيام أحدهما مقام الأخر   ص 9",
    "المسألة  الثانية : إستقبال القبلة وإستدبارها حال قضاء الحاجة  ص9    ",
    "المسألة  الثالثة : ما يسن فعله لداخل الخلاء  ص10",
    "المسألة الرابعة : ما يحرم فعله على من أراد قضاء الحاجة  ص11",
    "المسألة  الخامسة : ما يكره فعله للمتخلي  ص12 ",
  ],
  unit4: [
    "المسألة  الأولى : حكمه  ص 13 ",
    "المسألة  الثانية متى يتأكد  ص 13",
    "المسألة  الثالثة: بم يكون   ص 14",
    "المسألة الرابعة : فوائد السواك   ص 14 ",
    "المسألة  الخامسة : سنن الفطرة   ص 14 ",
  ],
  unit5: [
    "المسألة  الأولى تعريفة، حكمه    ص 17",
    "المسألة الثانية : الدليل على وجوبه، وعلى من يجب، ومتى يجب    ص17",
    "المسألة الثالثة : في شروطه  ص18",
    "المسألة الرابعة : فروضه - أي أعضاؤه   ص18",
    "المسألة الخامسة : سننه ص 19 ",
    "المسألة السادسة : في نواقضه ص 21",
    "المسألة السابعة : مايجب له الوضوء ص 22",
    "المسألة الثامنة : ما يستحب له الوضوء ص 23",
  ],
  unit6: [
    "المسألة  الأولى : حكم المسح على الخفين  ص 24",
    "المسألة  الثانية : شروط المسح على الخفين ص 25",
    "المسألة الثالثة : كيفية المسح وصفته ص 25",
    "المسألة الرابعة: مدته ص 26",
    "المسألة  الخامسة : مبطلاته ص 26",
    "المسألة السادسة : إبتداء مدة المسح ص 26",
    "المسألة السابعة : المسح على الجبيرة والعمامة وخمر النساء ص 27",
  ],
  unit7: [
    "المسألة الأولى : معنى الغسل ص 28",
    "المسألة الثانية : في صفة الغسل وكيفيته ص 29",
    "المسألة  الثالثة : الإغسال المستحبة ص 30",
    "المسألة الرابعة : الأحكام المترتبة على من وجب عليه الغسل ص 30",
  ],
  unit8: [
    "المسألة الأولى حكم التيمم دليل مشروعيته ص 32",
    "المسألة الثانية : شروط التيمم، والأسباب المبيحة له ص 32",
    "المسألة الثالثة : مبطلات التيمم  ص 34",
    "المسألة الرابعة : صفة التيمم  ص 34",
  ],
  unit9: [
    "المسألة الأولى : تعريف النجاسة  ص 35",
    "المسألة الثانية : الأشياء التي قام الدليل على نجاستها  ص 35",
    "المسألة الثالثة : كيفية تطهير النجاسة  ص 36",
  ],
  unit10: [
    "المسألة الأولى : بداية وقت الحيض ونهايته  ص 38",
    "المسألة الثانية : أقل مدة الحيض وأكثرها   ص 38 ",
    "المسألة الثالثة : غالب  الحيض   ص 38",
    "المسألة الرابعة : ما يحرم بالحيض والنفاس   ص 39",
    "المسألة الخامسة : ما يوجبه الحيض  ص 40",
    "المسألة السادسة : أقل النفاس وأكثره  ص 41",
    "المسألة السابعة : في دم المستحاضة   ص 41",
  ],
  prayer1: ["لا يوجد مسائل"],
  prayer2: [
    "المسألة الأولى : تعريف الأذان والإقامة  ص45",
    "المسألة الثانية شروط صحتهما  ص45",
    "المسألة الثالثة : في الصفات المستحبة في المؤذن  ص46",
    "المسألة الرابعة : في صفة الأذان والإقامة  ص46",
    "المسألة الخامسة : ما يقوله سامع الأذان وما يدعو به بعده  ص47",
  ],
  prayer3: ["لا يوجد مسائل"],
  prayer4: [
    "المسألة الأولى :في عدد الصلوات المكتوبة   ص50 ",
    "المسألة الثانية : على من تجب  ص50",
    "المسألة الثالثة : في شروطها ص50",
    "المسألة الرابعة : في أركانها  ص52",
    "المسألة الخامسة : في واجباتها  ص54 ",
    "المسألة السادسة : في سننها  ص56",
    "المسألة السابعة: مبطلاتها  ص57",
    "المسألة الثامنة : ما يكره في الصلاة  ص58",
  ],
  fasting1: [
    "المسألة الأولى: تعريف الصيام ص 149",
    "المسألة الثانية: حكم صيام رمضان ودليل ذلك ص 149",
    "المسألة الثالثة: أقسام الصيام ص 150",
    "المسألة الرابعة: فضل صيام شهر رمضان، والحكمة من مشروعية صومه ص 151",
    "المسألة الخامسه: شروط وجوب صيام رمضان ص 151",
    "المسألة السادسة:ثبوت دخول شهر رمضان وأنقضائه ص 152",
    "المسألة السابعة: وقت النية في الصوم وحكمها  ص 153",
  ],
  fasting2: [
    "المسألة الأولى:الأعذار المبيحة للفطر في رمضان 154 ص ",
    "المسألة الثانية: مفطرات الصائم 156 ص ",
  ],
  fasting3: [
    "المسألة الأولى:مستحبات الصيام  159 ص ",
    "المسألة الثانية: مكروهات الصيام 160 ص ",
  ],
  fasting4: [
    "المسألة الأولى:قضاء الصيام  162 ص ",
    "المسألة الثانية: الصيام المستحب  162 ص ",
    "المسألة الثالثة: ما يكره ويحرم من الصيام 162 ص   ",
  ],
  fasting5: [
    "المسألة الأولى:تعريف الإعتكاف  167 ص ",
    "المسألة الثانية: شروط الإعتكاف  167 ص ",
    "المسألة الثالثة: زمان الإعتكاف ومستحباته وما يباح للمعتكف 168 ص ",
    "المسألة الرابعة: مبطلات الإعتكاف 170 ص",
  ],
  prayer44: [
    "المسألة الثامنة: ما يكره في الصلاة  58 ص ",
    "المسألة التاسعة: حكم تارك الصلاة 60 ص ",
  ],
  prayer5: [
    "المسألة الأولى:فضلها والحكمة من مشروعيتها 62 ص ",
    "المسألة الثانية: في أقسامها 62 ص ",
    "المسألة الثالثة: ما تسن له الجماعة من صلاة التطوع 63 ص",
    "المسألة الرابعة: في عدد الرواتب 63 ص ",
    "المسألة الخامسه:حكم الوتر وفضله ووقته 64 ص",
    "المسألة السادسة:صفة الوتر وعدد ركعاته 65 ص ",
    "المسألة السابعة: الأوقات المنهي عن النافلة فيها  66 ص ",
  ],
  prayer6: [
    `المسألة الأولى : في مشروعية سجود السهو وأسبابه .`,
    `المسألة الثانية : متى يجب؟`,
    `المسألة الثالثة : متى يُسَنُ ؟ .`,
    `المسألة الرابعة : موضعه وصفته`,
    `المسألة الخامسة : سجود التلاوة`,
    `المسألة السادسة : سجود الشكر`
  ],
  prayer7: [
    `المسألة الأولى : فضل صلاة الجماعة وحكمها .`,
    `المسألة الثانية : إذا دخل الرجل المسجد وقد صلى هل يجب عليه أن يصلي مع الجماعة الصلاة التي قد صلاها أولاً ؟`,
    `المسألة الثالثة : أقل ما تنعقد به الجماعة`,
    `المسألة الرابعة : بم تُدرك الجماعة؟`,
    `المسألة الخامسة : من يعذر بترك الجماعة .`,
    `المسألة السادسة : إعادة الجماعة في المسجد الواحد .`,
    `المسألة السابعة : حكم الصلاة إذا أقيمت الصلاة المكتوبة.`
  ],
  prayer8: [
    `المسألة الأولى : من أحق بالإمامة ؟`,
    `المسألة الثانية : من تحرم إمامته`,
    `المسألة الثالثة : من تكره إمامته`,
    `المسألة الرابعة : موضع الإمام من المأمومين .`,
    `المسألة الخامسة : ما يتحمله الإمام عن المأموم .`,
    `المسألة السادسة : مسابقة الإمام`,
    `المسألة السابعة : أحكام متفرقة في الإمامة والجماعة .`
  ],
  prayer9: [
    `المسألة الأولى : في حكم القصر`,
    `المسألة الثانية : في تحديد الصلاة التي يجوز فيها القصر . المسألة الثالثة : في حد السفر الذي تقصر فيه الصلاة ونوعه`,
    `المسألة الرابعة : هل يقصر من نوى الإقامة ؟ . المسألة الخامسة : الحالات التي يجب على المسافر فيها إتمام الصلاة.`,
    `المسألة الأولى : في مشروعية الجمع بين الصلاتين ، ومن يباح له ذلك .`,
    `المسألة الثانية : في حد الجمع المشروع .`
  ], prayer10: [
    `الباب العاشر : في صلاة الجمعة ، وفيه مسائل :`,
    `المسألة الأولى : حكمها ودليل ذلك`,
    `المسألة الثانية : على من تجب ؟`,
    `المسألة الثالثة : وقتها`,
    `المسألة الرابعة : الخطبة`,
    `المسألة الخامسة : في سنن الخطبة .`,
    `المسألة السادسة : ما يحرم . فعله في الجمعة`,
    `المسألة السابعة : بم تدرك الجمعة`,
    `المسألة الثامنة : في نافلة الجمعة .`,
    `المسألة التاسعة : كيفية صلاة الجمعة`,
    `المسألة العاشرة : في سنن الجمعة .`
  ],
  prayer11: [
    `المسألة الأولى : حكمها ودليل مشروعيتها`,
    `المسألة الثانية : كيفية صلاة الخوف.`
  ],
  prayer12: [
    `المسألة الأولى : حكمها ودليل ذلك .`,
    `المسألة الثانية : في شروطها .`,
    `المسألة الثالثة : المواضع التي تصلى فيها .`,
    `المسألة الرابعة : وقتها`,
    `المسألة الخامسة : صفتها وما يقرأ فيها .`,
    `المسألة السادسة : موضع الخطبة .`,
    `المسألة السابعة : قضاء العيد`,
    `المسألة الثامنة : سننها`
  ],
  prayer13: [
    `المسألة الأولى : تعريفها وحكمها ودليل ذلك`,
    `المسألة الثانية : سببها .`,
    `المسألة الثالثة : وقتها وكيفيتها`,
    `المسألة الرابعة : الخروج إليها .`,
    `المسألة الخامسة : الخطبة فيها`,
    `المسألة السادسة : السنن التي ينبغي فعلها فيها .`
  ],
  prayer14: [
    `المسألة الأولى : تعريف الكسوف والحكمة منه`,
    `المسألة الثانية : حكم صلاة الكسوف ودليلها`,
    `المسألة الثالثة : وقتها`,
    `المسألة الرابعة : كيفيتها وما يقرأ فيها .`
  ], prayer15: [
    'المسألة الأولى : حكم غسل الميت وكيفيته',
    'المسألة الثانية : من يتولى الغسل .',
    'المسألة الثالثة : حكم تكفينه وكيفيته',
    'المسألة الرابعة : الصلاة على الميت ، حكمها ودليل ذلك',
    'المسألة الخامسة : شروط الصلاة على الميت',
    'المسألة السادسة : من يصلي عليه ، وكم عددهم ؟',
    'المسألة السابعة : الصلاة على الغائب',
    'المسألة الثامنة : حكم دفن الميت وما يتعلق بذلك'
  ], alms1: [
    `المسألة الأولى : في تعريف الزكاة صفحة 121`,
    `المسألة الثانية : حكم الزكاة ودليل ذلك . صفحة 121`,
    `المسألة الثالثة : حكم من أنكرها . صفحة 122`,
    `المسألة الرابعة : حكم مانعها بخلاً . صفحة 122`,
    `المسألة الخامسة : في الأموال التي تجب فيها الزكاة . صفحة 123`,
    `المسألة السادسة : في الحكمة من إيجاب الزكاة ، وعلى من تجب (شروط وجوبها) صفحة 124`,
    `المسألة السابعة : في أقسامها صفحة 126`,
    `المسألة الثامنة : زكاة الدين صفحة 126`
  ],
  alms2: [
    `المسألة الأولى : حكم الزكاة فيهما وأدلة ذلك . صفحة 127`,
    `المسألة الثانية : مقدارها صفحة 128`,
    `المسألة الثالثة : شروطها . صفحة 128`,
    `المسألة الرابعة : في ضم أحدهما -الذهب والفضة- إلى الآخر صفحة 129`,
    `المسألة الخامسة : في زكاة الحلي . صفحة 129`,
    `المسألة السادسة : في زكاة عروض التجارة صفحة 131`
  ],
  alms3: [
    `المسألة الثانية : شروطها . صفحة 131`,
    `المسألة الثالثة : في مقدار الواجب صفحة 132`,
    `المسألة الرابعة : في زكاة العسل صفحة 132`,
    `المسألة الخامسة : في الركاز صفحة 132`
  ],
  alms4: [
    `المسألة الأولى : شروط وجوبها . صفحة 134`,
    `المسألة الثانية : في قدر الواجب . صفحة 135`,
    `المسألة الثالثة : في صفة الواجب . صفحة 138`,
    `المسألة الرابعة : في الخلطة في بهيمة الأنعام . صفحة 139`
  ],
  alms5: [
    `المسألة الأولى : في حكمها ودليل ذلك صفحة 141`,
    `المسألة الثانية : شروطها وعلى من تجب صفحة 141`,
    `المسألة الثالثة : في حكمة وجوبها . صفحة 142`,
    `المسألة الرابعة : مقدار الواجب ومم يخرج . صفحة 142`,
    `المسألة الخامسة : في وقت وجوبها وإخراجها صفحة 142`
  ],
  alms6: [
    `المسألة الأولى : من هم أهل الزكاة ؟ ودليل ذلك . صفحة 144`,
    `المسألة الثانية : في حد الذين لا تدفع لهم الزكاة . صفحة 145`,
    `المسألة الثالثة : هل يشترط استيعاب الأصناف الثمانية المذكورة عند تفريق الزكاة؟ صفحة 146`,
    `المسألة الرابعة : في نقل الزكاة من بلدها إلى بلد آخر صفحة 147`
  ], pilgrimage1: [
    `المسألة الأولى : في تعريف الحج . صفحة 171`,
    `المسألة الثانية : حكم الحج وفضله صفحة 171`,
    `المسألة الثالثة : هل يجب الحج في العمر أكثر من مرة ؟ صفحة 172`,
    `المسألة الرابعة : شروط الحج صفحة 172`,
    `المسألة الخامسة : حكم العمرة وأدلة ذلك .... صفحة 174`,
    `المسألة السادسة : مواقيت الحج والعمرة . صفحة 174`
  ],
  pilgrimage2: [
    `المسألة الأولى : في أركان الحج . صفحة 176`,
    `المسألة الثانية : واجبات الحج . صفحة 177`
  ],
  pilgrimage3: [
    `المسألة الأولى : في محظورات الإحرام . صفحة 179`,
    `المسألة الثانية : فدية المحظورات المسألة الثالثة : في الهدي وأحكامه صفحة 180`,
    `المسألة الثالثة : في الهدي وأحكامه  صفحة 181`
  ],
  pilgrimage4: [
    `لا يوجد مسائل `,
  ],
  pilgrimage5: [
    `المسألة الأولى : زيارة مسجد النبي صلى الله عليه وسلم . صفحة 188`,
    `المسألة الثانية : زيارة قبره صلى الله عليه وسلم . صفحة 189`,
    `المسألة الثالثة : الأماكن الأخرى التي تشرع زيارتها في المدينة النبوية صفحة 190`
  ],
  pilgrimage6: [
    `المسألة الأولى : في تعريف الأضحية وحكمهـا وأدلة مـشـروعـيـتـهـا وشروطها صفحة 192`,
    `المسألة الثانية : ما تجوز الأضحية به صفحة 192`,
    `المسألة الثالثة : الشروط المعتبرة في الأضحية . صفحة 193`,
    `المسألة الرابعة : وقت ذبح الأضحية صفحة 194`,
    `المسألة الخامسة : ما يصنع بالأضحية ، وما يلزم المضحي إذا دخلت العشر . صفحة 195`
  ],
  pilgrimage7: [
    `المسألة الأولى : تعريف العقيقة وحكمها ووقتها . صفحة 196`,
    `المسألة الثانية : مقدار ما يذبح في العقيقة صفحة 197`,
    `المسألة الثالثة : تسمية المولود ، وحلق رأسه ، وتحنيكه ، والأذان في أذنه صفحة 197`
  ]
};

let term2 = {
  fqh: [
    {
      topic: "fasting",
      count: 1,
      page: 149,
      section: "الباب الأول",
      sectionName: "في مقدمات الصيام",
    },
    {
      topic: "fasting",
      count: 2,
      page: 154,
      section: "الباب الثاني",
      sectionName: "في الأعذار المبيحة للفطر ومفطرات الصائم",
    },
    {
      topic: "fasting",
      count: 3,
      page: 159,
      section: "الباب الثالث",
      sectionName: "مستحبات الصيام وكروهاته",
    },
    {
      topic: "fasting",
      count: 4,
      page: 162,
      section: "الباب الرابع",
      sectionName: "في القضاء والصيام والمستحب وما يكره ويحرم من الصيام",
    },
    {
      topic: "fasting",
      count: 5,
      page: 167,
      section: "الباب الخامس",
      sectionName: "في الإعتكاف",
    },
    {
      topic: "prayer",
      count: 44,
      page: 58,
      section: "الباب الرابع",
      sectionName:
        "في شروط الصلاة وأركانها وأدلة ذلك وحكم تاركها (من أول مسألة ما يكره في الصلاة)",
    },
    {
      topic: "prayer",
      count: 5,
      page: 62,
      section: "الباب الخامس",
      sectionName: "في صلاة التطوع",
    }, {
      topic: "prayer",
      count: 6,
      page: 69,
      section: "الباب السادس",
      sectionName: "في سجود السهو والتلاوة والشكر"
    },
    {
      topic: "prayer",
      count: 7,
      page: 75,
      section: "الباب السابع",
      sectionName: "في صلاة الجماعة"
    },
    {
      topic: "prayer",
      count: 8,
      page: 81,
      section: "الباب الثامن",
      sectionName: "في الإمامة في الصلاة"
    },
    {
      topic: "prayer",
      count: 9,
      page: 87,
      section: "الباب التاسع",
      sectionName: "في صلاة أهل الأعذار"
    },
    {
      topic: "prayer",
      count: 10,
      page: 93,
      section: "الباب العاشر",
      sectionName: "في صلاة الجمعة"
    },
    {
      topic: "prayer",
      count: 11,
      page: 100,
      section: "الباب الحادي عشر",
      sectionName: "في صلاة الخوف"
    },
    {
      topic: "prayer",
      count: 12,
      page: 102,
      section: "الباب الثاني عشر",
      sectionName: "في صلاة العيدين"
    },
    {
      topic: "prayer",
      count: 13,
      page: 106,
      section: "الباب الثالث عشر",
      sectionName: "في صلاة الاستسقاء"
    },
    {
      topic: "prayer",
      count: 14,
      page: 109,
      section: "الباب الرابع عشر",
      sectionName: "في صلاة الكسوف"
    },
    {
      topic: "prayer",
      count: 15,
      page: 111,
      section: "الباب الخامس عشر",
      sectionName: "في صلاة الجنازة وأحكام الجنائز"
    },
    {
      topic: "alms",
      count: 1,
      page: 121,
      section: "الباب الأول",
      sectionName: "في مقدمات الزكاة ، وفيه مسائل"
    },
    {
      topic: "alms",
      count: 2,
      page: 127,
      section: "الباب الثاني",
      sectionName: "في زكاة الذهب والفضة ، وفيه مسائل"
    },
    {
      topic: "alms",
      count: 3,
      page: 131,
      section: "الباب الثالث",
      sectionName: "في زكاة الخارج من الأرض ، وفيه مسائل",
    },
    {
      topic: "alms",
      count: 4,
      page: 134,
      section: "الباب الرابع",
      sectionName: "في زكاة بهيمة الأنعام ، وفيه مسائل"
    },
    {
      topic: "alms",
      count: 5,
      page: 141,
      section: "الباب الخامس",
      sectionName: "في زكاة الفطر ، ويقال لها : صدقة الفطر ، وفيه مسائل"
    },
    {
      topic: "alms",
      count: 6,
      page: 144,
      section: "الباب السادس",
      sectionName: "في أهل الزكاة . وفيه مسائل"
    },
    {
      topic: "pilgrimage",
      count: 1,
      page: 171,
      section: "الباب الأول",
      sectionName: "في مقدمات الحج ، وفيه مسائل"
    },
    {
      topic: "pilgrimage",
      count: 2,
      page: 176,
      section: "الباب الثاني",
      sectionName: "في أركان الحج وواجباته ، وفيه مسألتان"
    },
    {
      topic: "pilgrimage",
      count: 3,
      page: 179,
      section: "الباب الثالث",
      sectionName: "في المحظورات والفدية والهدي ، وفيه مسائل"
    },
    {
      topic: "pilgrimage",
      count: 4,
      page: 184,
      section: "الباب الرابع",
      sectionName: "في صفة الحج والعمرة"
    },
    {
      topic: "pilgrimage",
      count: 5,
      page: 188,
      section: "الباب الخامس",
      sectionName: "في الأماكن التي تشرع زيارتها في المدينة ، وفــيــه مسائل"
    },
    {
      topic: "pilgrimage",
      count: 6,
      page: 192,
      section: "الباب السادس",
      sectionName: "في الأضحية ، وفيه مسائل"
    },
    {
      topic: "pilgrimage",
      count: 7,
      page: 196,
      section: "الباب السابع",
      sectionName: "في العقيقة ، وفيه مسائل"
    }
  ],
  tazkia: [
    {
      topic: "tazkia",
      page: 43,
      sectionName: "أحوال القلب وأقسامها",
      content: [
        {
          page: 53,
          section: "القسم السادس",
          sectionName: "علامات مرض القلب",
        },
        {
          page: 53,
          section: "القسم السابع",
          sectionName: "علامات صحة القلب",
        },
      ],
    },
    {
      topic: "tazkia",
      page: 62,
      sectionName: "أسباب مرض القلب وسمومه الضارة",
    },
  ],
};

//end fqh data

// start term 2 fqh
let fastingDiv = document.querySelector(".term-2 .fasting");
let prayerDiv = document.querySelector(".term-2 .prayer");
let almsDiv = document.querySelector(".term-2 .alms");
let pilgrimageDiv = document.querySelector(".term-2 .pilgrimage");
if (fastingDiv != null && prayerDiv != null) {
  for (let i = 0; i < term2.fqh.length; i += 1) {
    if (term2.fqh[i].topic == "fasting") {
      fastingDiv.innerHTML += `
  <!-- start lesson  ${i + 1}-->
  <a href="#" class="list-group-item
      list-group-item-action showModal"
      data-unit="fasting${term2.fqh[i].count}"
      data-bs-toggle="modal"
      data-bs-target="#staticBackdrop"
      data-title="${term2.fqh[i].sectionName}">
      <div class="d-flex w-100
          justify-content-between">
          <h5 class="mb-1">ص ${term2.fqh[i].page}</h5>
          <small class="text-muted">${term2.fqh[i].section}
          </small>
      </div>
      <p class="mb-1">${term2.fqh[i].sectionName}</p>
      <small class="text-muted">يمكنك الضغط لرؤية
          المسائل التي في الباب</small>
  </a>
  <!-- end lesson  ${i + 1}-->
`;
    }
    if (term2.fqh[i].topic == "prayer") {
      prayerDiv.innerHTML += `
    <!-- start lesson  ${i + 1}-->
    <a href="#" class="list-group-item
        list-group-item-action showModal"
        data-unit="prayer${term2.fqh[i].count}"
        data-bs-toggle="modal"
        data-bs-target="#staticBackdrop"
        data-title="${term2.fqh[i].sectionName}">
        <div class="d-flex w-100
            justify-content-between">
            <h5 class="mb-1">ص ${term2.fqh[i].page}</h5>
            <small class="text-muted">${term2.fqh[i].section}
            </small>
        </div>
        <p class="mb-1">${term2.fqh[i].sectionName}</p>
        <small class="text-muted">يمكنك الضغط لرؤية
            المسائل التي في الباب</small>
    </a>
    <!-- end lesson  ${i + 1}-->
  `;
    }

    if (term2.fqh[i].topic == "alms") {
      almsDiv.innerHTML += `
    <!-- start lesson  ${i + 1}-->
    <a href="#" class="list-group-item
        list-group-item-action showModal"
        data-unit="alms${term2.fqh[i].count}"
        data-bs-toggle="modal"
        data-bs-target="#staticBackdrop"
        data-title="${term2.fqh[i].sectionName}">
        <div class="d-flex w-100
            justify-content-between">
            <h5 class="mb-1">ص ${term2.fqh[i].page}</h5>
            <small class="text-muted">${term2.fqh[i].section}
            </small>
        </div>
        <p class="mb-1">${term2.fqh[i].sectionName}</p>
        <small class="text-muted">يمكنك الضغط لرؤية
            المسائل التي في الباب</small>
    </a>
    <!-- end lesson  ${i + 1}-->
  `;
    }

    if (term2.fqh[i].topic == "pilgrimage") {
      pilgrimageDiv.innerHTML += `
    <!-- start lesson  ${i + 1}-->
    <a href="#" class="list-group-item
        list-group-item-action showModal"
        data-unit="pilgrimage${term2.fqh[i].count}"
        data-bs-toggle="modal"
        data-bs-target="#staticBackdrop"
        data-title="${term2.fqh[i].sectionName}">
        <div class="d-flex w-100
            justify-content-between">
            <h5 class="mb-1">ص ${term2.fqh[i].page}</h5>
            <small class="text-muted">${term2.fqh[i].section}
            </small>
        </div>
        <p class="mb-1">${term2.fqh[i].sectionName}</p>
        <small class="text-muted">يمكنك الضغط لرؤية
            المسائل التي في الباب</small>
    </a>
    <!-- end lesson  ${i + 1}-->
  `;
    }
  }
}
// end term 2 fqh

// Start term 2 nawawy
let totalNawawy2 = document.querySelector(".term-2 .total-nawawy");
let nawawyDiv = document.querySelector(".term-2 .nawawy-section");
if (nawawyDiv != null) {
  let nawawyCount2 = {
    start: 20,
    end: 42,
  };
  totalNawawy2.innerHTML += ` ${nawawyCount2.end - nawawyCount2.start}`;
  for (let i = nawawyCount2.start; i < nawawyCount2.end; i += 1) {
    nawawyDiv.innerHTML += `
    <!-- start section H ${i}  -->
    <a href="nawawyExplain.html#${i}"
        class="list-group-item list-group-item-action">
        <div
            class="d-flex w-100 justify-content-between">
            <h5 class="mb-1"> ${allNawawy[i].hadith
        .split("\n")
        .slice(0, 1)
        .join(" ")} </h5>
            <small class="text-muted">${allNawawy[i].head}</small>
        </div>
        <p class="mb-1">${allNawawy[i].hadith}</p>
        <small class="text-muted">يمكنك الضغط لرؤية شرح الحديث</small>
    </a>
    <!-- end section H ${i}  -->
`;
  }
}
// end term 2 nawawy

// start term 2 tazkia
let tazkiaDiv = document.querySelector(".term-2 .tazkia-section");
let tazkiaSectionCount;
if (tazkiaDiv != null) {
  // totalNawawy2.innerHTML += ` ${term2.tazkia.length}`;
  for (let i = 0; i < term2.tazkia.length; i += 1) {
    if (term2.tazkia[i].content != undefined) {
      tazkiaSectionCount = term2.tazkia[i].content.length;
    } else {
      tazkiaSectionCount = 1;
    }

    tazkiaDiv.innerHTML += `
    <!-- start section  -->
    <a href="#" class="list-group-item
    list-group-item-action active bg-secondary
    text-white"
        aria-current="true">
        <div class="d-flex w-100
    justify-content-between">
            <h5 class="mb-1">ص ${term2.tazkia[i].page}</h5>
            <small> عدد الأقسام ${tazkiaSectionCount}  </small>
        </div>
        <p class="mb-1">${term2.tazkia[i].sectionName}</p>
    </a>
    <!-- end section  -->
`;

    if (term2.tazkia[i].content != undefined) {
      for (let x = 0; x < term2.tazkia[i].content.length; x += 1) {
        tazkiaDiv.innerHTML += `
    <!-- start lesson  1-->
    <a href="#" class="list-group-item
        list-group-item-action ">
        <div class="d-flex w-100
            justify-content-between">
            <h5 class="mb-1">ص ${term2.tazkia[i].content[x].page}</h5>
            <small class="text-muted">${term2.tazkia[i].content[x].section}
            </small>
        </div>
        <p class="mb-1">${term2.tazkia[i].content[x].sectionName} </p>
    </a>
    <!-- end lesson  1-->`;
      }
      console.log(term2.tazkia[i].content);
    }
  }
}
// end term 2 tazkia

let fqhShowModalButton = document.querySelectorAll(".showModal");
let fqhModal = document.querySelector(".fqh-modal #staticBackdrop .modal-body");
let fqhModalTitle = document.querySelector(
  ".fqh-modal #staticBackdrop #staticBackdropLabel"
);
fqhShowModalButton.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    let unitCount = btn.dataset.unit;
    let modalTitel = btn.dataset["title"];
    fqhModalTitle.innerHTML = modalTitel;
    fqhData[`${unitCount}`].forEach((fqh) => {
      fqhModal.innerHTML += `<p>${fqh}</p>`;
    });
  });
});
modalClose = document.querySelectorAll(".fqh-modal .modal-close");
modalClose.forEach((mod) => {
  mod.addEventListener("click", () => {
    fqhModal.innerHTML = "";
  });
});
// end fqh data





