import { Controller } from "@hotwired/stimulus"
import Typed from "typed.js"

export default class extends Controller {
  connect() {
    new Typed(this.element, {
      strings: ["Classics", "Action", "Comedy", "Drama", "Science Fiction", "Animation"],
      typeSpeed: 90,
      loop: true
    });
  }
}
