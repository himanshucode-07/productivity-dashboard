export class greeting {
  constructor() {
    this.greetingEl = document.querySelector(".greeting h2");
  }
  init() {
    const hour = new Date().getHours();
    let message;
    if (hour >= 0 && hour < 12) {
      message = "Good morning 🌤️";
    } else if (hour >= 12 && hour < 18) {
      message = "Good afternoon ☀️";
    } else {
      message = "Good evening 🌙";
    }

    this.greetingEl.innerText = message;
  }
}
