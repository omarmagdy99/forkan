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
        <a class="nav-link active  mx-lg-2" aria-current="page" href="fqh.html">التزكية</a>
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
fqhData = {
  unit1: [
    "المسألة الأولى: في التعريف بالطهارة وأهميتها ص 1",
    "المسألة الثانية : الماء الذي تحصل به الطهارة ص 2   ",
    "المسألة الثالثة : الماء إذا خالطته نجاسة  ص 2 ",
    "المسألة الرابعة : الماء إذا خالطه طاهر  ص 3 ",
    "المسألة الخامسة : حكم الماء المستعمل  في الطهارة  ص 4",
    "المسألة السادسة : أسار الأجميين وبهيمة الأنعام  ص 4",
  ],
  unit2: [
    "المسألة الأولى : إستعمال أنية الذهب والفضة وعيرهما في الطهارة  ص 6 ",
    "المسألة  الثانية : حكم استعمال الإناء المضبب بالذهب والفضة  ص  6",
    "المسألة  الثالثة : أنية الكفار  ص 7 ",
    "المسألة الرابعة : الطهارةفي الأنية المتخذة من جلود الميتة  ص 7  ",
  ],
  unit3: [
    "المسألة الأولى : الإستنجاء و الإستجمار وقيام أحدهما مقم الأخر   ص 9",
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
};
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
