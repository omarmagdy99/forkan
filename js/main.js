//search message 1
function cID() {
  let cCid = document.getElementById("cCid").value;

  // window.alert(cCid.length)
  if (cCid.length == 9) {
    window.open(
      `https://sniffer.global-bilgi.com.tr/379/Monitoring#/q=id:${cCid}`,
      "_blank"
    );
  } else {
    window.alert("pleas Enter the ID");
  }
}

//search message 2
function cID2() {
  let cCid2 = document.getElementById("cCid2").value;

  if (cCid2.length == 9) {
    window.open(
      `https://sniffer.global-bilgi.com.tr/379/Monitoring#/q=id:${cCid2}`,
      "_blank"
    );
  } else {
    window.alert("pleas Enter the ID");
  }
}

//search user
function sID() {
  let sSid = document.getElementById("sSid").value;

  if (sSid.length == 16) {
    window.open(
      `https://sniffer.global-bilgi.com.tr/379/Monitoring#/&nq=fromuserid:${sSid}`,
      "_blank"
    );
  } else {
    window.alert("pleas Enter the ID");
  }
}

//password
function smPassword() {
  let txtPassword = document.getElementById("exampleInputPassword1").value;
  if (txtPassword == 123456) {
    document.getElementById("particles-js").remove();
  } else {
    document.getElementById(
      "smPError"
    ).innerHTML += `<div class="alert alert-danger" role="alert">The Password is wrong!</div>`;
  }
}

// Copy Links
function aOpenLink() {
  let aOLink = document.getElementsByTagName("input");
  for (let i = 0; i < aOLink.length; i++) {
    if (aOLink[i].checked) {
      window.open(aOLink[i].value, "_blank");
    }
  }
}

function checkAll() {
  let checkElt = document.getElementsByTagName("input");
  for (let c = 0; c < checkElt.length; c++) {
    checkElt[c].checked = true;
  }
}
function clearAll() {
  let checkElt = document.getElementsByTagName("input");
  for (let c = 0; c < checkElt.length; c++) {
    checkElt[c].checked = false;
  }
}

function errorLinks() {
  for (let i = 0; i < 2; i++) {
    let errorWindowo = window.open("", "errorLink", "width=200,height=100");
    errorWindowo.close();
  }
}

// coppy text

let LateRefundScript = `Late Refund
Order Number: ####
Shipping Number: ####,####
Barcode: ####
Amount: ####
Return Date: ####
comment: 
العميل قام بعمل طلب إسترجاع وتم إرجاعه للمخزن ولم يتم رد المبلغ
`,
  LateOrderScript = `Late Order
Order Number: ####
Shipping Number: ####
Date Create:####
comment: 
العميل تواصل للشكوى من تأخير الطلب و يريد الطلب في أسرع وقت 
`,
  MissingSetScript = `Missing Set
Order Number: ####
Shipping Number: ####
Barcode: ####
comment: 
العميل يشتكي أنه وصل له #### لو لم يصل له #### والعميل يريد القطعه إذا كانت متوفرة
`,
  MissingItemScript = `Missing Item
Order Number: ####
Shipping Number: ####
Barcode: ####
comment: 
العميل يشتكي أنه لم يصل له قطع من الطلب و العميل يريد القطع أو رد المبلغ في أسرع وقت `;

function ScriptScreen() {
  document.getElementById("lateRefundArea").value = LateRefundScript;
  document.getElementById("lateOrderArea").value = LateOrderScript;
  document.getElementById("MissingSetArea").value = MissingSetScript;
  document.getElementById("MissingItemArea").value = MissingItemScript;
}
// Late Refund

function lateRefund() {
  navigator.clipboard.writeText(LateRefundScript);
  var exampleTriggerEl = document.getElementById("lateRefund");
  var tooltip = new bootstrap.Tooltip(exampleTriggerEl);
  tooltip.show();

  setTimeout(function () {
    tooltip.hide();
  }, 1500);
}
// Late Order
function lateOrder() {
  navigator.clipboard.writeText(LateOrderScript);
  var exampleTriggerEl = document.getElementById("lateOrder");
  var tooltip = new bootstrap.Tooltip(exampleTriggerEl);
  tooltip.show();

  setTimeout(function () {
    tooltip.hide();
  }, 1500);
}
// Missing Set
function MissingSet() {
  navigator.clipboard.writeText(MissingSetScript);
  var exampleTriggerEl = document.getElementById("MissingSet");
  var tooltip = new bootstrap.Tooltip(exampleTriggerEl);
  tooltip.show();

  setTimeout(function () {
    tooltip.hide();
  }, 1500);
}
function MissingItem() {
  navigator.clipboard.writeText(MissingItemScript);
  var exampleTriggerEl = document.getElementById("MissingItem");
  var tooltip = new bootstrap.Tooltip(exampleTriggerEl);
  tooltip.show();

  setTimeout(function () {
    tooltip.hide();
  }, 1500);
}
