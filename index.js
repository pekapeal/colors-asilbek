const inp = document.querySelectorAll('.colors input');
const gradientBox = document.querySelector('.gradient-box');
const selectMenu = document.querySelector('.select-box select');
const body = document.body;
const textarea = document.querySelector('textarea');
const copyBtn = document.querySelector('.copy');

function generateGradient() {
  // har bir inputdagi o'zgarish uchun yangi ranglar yaratadi
  const gradient = `linear-gradient(${selectMenu.value}, ${inp[0].value},  ${inp[1].value})`;
  //   qaysi rang tanlansa usha rang div ga o'tib qoladi!
  gradientBox.style.background = gradient;
  body.style.background = gradient;
  textarea.value = `background: ${gradient};`;

  //   test qilish uchun
  console.log(gradient);
}

inp.forEach((el) => {
  // har bir rang o'zgarganda inputda o'zgarish bo'ladi
  el.addEventListener('input', generateGradient);
});

// button bosganda tayyor kodni kopiya qilish uchun
function copyCode() {
  navigator.clipboard.writeText(textarea.value);
  copyBtn.innerText = 'Code Copied';

  //sekundan keyn o'chib ketishi uchun
  setTimeout(() => (copyBtn.innerText = 'Copy Code'), 2000);
}
selectMenu.addEventListener('change', generateGradient);
copyBtn.addEventListener('click', copyCode);
