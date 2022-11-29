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
        <a class="nav-link active  mx-lg-3" onclick="removeNotify()" aria-current="page" data-bs-toggle="offcanvas"
          href="#offcanvasExample" role="button" aria-controls="offcanvasExample">
          الاشعارات <span class="badge bg-danger " id="notify">3</span>
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
        <a class="nav-link active  mx-lg-2" aria-current="page" href="fqh.html">التجويد</a>
      </li>
      <li class="nav-item">
        <a class="nav-link active  mx-lg-2" aria-current="page" href="fqh.html">التزكية</a>
      </li>


    </ul>

  </div>
</div>

`;


function removeNotify(){
document.getElementById("notify").classList.add('d-none');
}