const singUpBtn = document.querySelector('#sign-up-btn')
const singInBtn = document.querySelector('#sign-in-btn')
const container = document.querySelector('.container')
document.getElementById("submit-btn").addEventListener("click",function(){
	var va = confirm("你确定登录吗，可不能更改了哦！！");
	if(va) {
		alert("点击确定3秒后自动返回主页")
	} else {
		alert("取消了吗，呜呜呜")
	}
	setInterval(() => {
	window.location.href = "index.html";
	}, 3000);
})
document.getElementById("submit-bts").addEventListener("click",function(){
	var va = confirm("你确定注册吗，可不能更改了哦！！");
	if(va) {
		alert("点击确定3秒后自动返回主页")
	} else {
		alert("真的不注册了吗，呜呜呜")
	}
	setInterval(() => {
	window.location.href = "index.html";
	}, 3000);
})

singUpBtn.addEventListener('click', () => {
  container.classList.add('sign-up-mode')
})
singInBtn.addEventListener('click', () => {
  container.classList.remove('sign-up-mode')
})

