import { Controller } from "@hotwired/stimulus"
import Typed from "typed.js"

export default class extends Controller {
  connect() {
    new Typed(this.element, {
      strings: ["Animation", "Classics", "Action", "Comedy", "Drama", "Science Fiction"],
      typeSpeed: 80,
      loop: true
    });
  }
}
