const toggleDistortedText = () => {
    let test = document.getElementsByTagName('distort-text');
    for (let i = 0; i < test.length; i++) {
        if (test[i].getAttribute('dir') == 'in') {
            test[i].setAttribute('delay', 0);
            test[i].setAttribute('dir', 'out');
        } else {
            test[i].setAttribute('delay', 0.2);
            test[i].setAttribute('dir', 'in');
        }
    }
}

class DistortText extends HTMLElement {
    constructor() {
        super();
    }
    connectedCallback() {
        this.updateParameters();
        this.hasAttribute('onload') ? this.distortText() : this.hasAttribute('onclick') ? this.addEventListener('click', this.distortText) : 0;
    }
    updateParameters() {
        this.text = this.getAttribute('text');
        this.animation = this.getAttribute('dir');
        this.opacity = this.animation == 'in' ? 0 : 1;
        this.delay = this.hasAttribute('delay') ? this.getAttribute('delay') : 0.2;
        this.speed = this.hasAttribute('speed') ? this.getAttribute('speed') : this.text.length;
    }
    static get observedAttributes() {
        return ['dir']
    }
    attributeChangedCallback(name, oldValue, newValue) {
        if (oldValue != newValue) {
            newValue == "true" ? (this.updateParameters(), this.distortText()) : (this.updateParameters(), this.distortText());
        }
    }
    distortText() {
        this.letters = '';
        for (let i = 0; i < this.text.length; i++) {
            let delay = (i / parseInt(this.speed) / 2) + parseFloat(this.delay, 10),
                str = this.text[i].replace('_', '&ensp;');
            this.letters += '<div style="opacity: ' + this.opacity + '; animation: distort_' + this.animation + ' .2s ease-out; animation-fill-mode: forwards; animation-delay:' + delay + 's">' + str + '</div>'
        }
        this.innerHTML = this.letters;
    }
}

window.customElements.define('distort-text', DistortText);