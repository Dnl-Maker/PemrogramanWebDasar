function fn_ValForm() {
  console.log('validasi jalan');
  var sMsg = "";
  function trimStr(s){ return s.replace(/^\s+|\s+$/g,""); }

  var name = trimStr(document.getElementById("name").value);
  var email = trimStr(document.getElementById("email").value);
  var message = trimStr(document.getElementById("message").value);

  if (name === "") sMsg += "\n* Anda belum mengisikan nama";
  if (email === "") sMsg += "\n* Anda belum mengisikan email";
  else {
    var reEmail = /^[a-z0-9][a-z0-9_\-\.]*[a-z0-9]@[a-z0-9][a-z0-9\-\.]*[a-z0-9](\.[a-z0-9]{2,4})$/i;
    if (!reEmail.test(email)) sMsg += "\n* Format email tidak valid";
  }
  if (message === "") sMsg += "\n* Anda belum mengisikan pesan";

  if (sMsg !== "") { alert("Peringatan:\n" + sMsg); return false; }
  return true;
}
