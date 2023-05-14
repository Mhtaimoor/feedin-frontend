import React, { useEffect } from "react";
import "./confetti.css";
import logo from "../../assets/logo.png";
import { useNavigate } from "react-router-dom";

export default function Confetti() {
  const navigate = useNavigate();
  useEffect(() => {
    const Confettiful = function (el) {
      this.el = el;
      this.containerEl = null;

      this.confettiFrequency = 3;
      this.confettiColors = [
        "#EF2964",
        "#00C09D",
        "#2D87B0",
        "#48485E",
        "#EFFF1D",
      ];
      this.confettiAnimations = ["slow", "medium", "fast"];

      this._setupElements();
      this._renderConfetti();
    };

    Confettiful.prototype._setupElements = function () {
      const containerEl = document.createElement("div");
      const elPosition = this.el.style.position;

      if (elPosition !== "relative" || elPosition !== "absolute") {
        this.el.style.position = "relative";
      }

      containerEl.classList.add("confetti-container");

      this.el.appendChild(containerEl);

      this.containerEl = containerEl;
    };

    Confettiful.prototype._renderConfetti = function () {
      this.confettiInterval = setInterval(() => {
        const confettiEl = document.createElement("div");
        const confettiSize = Math.floor(Math.random() * 3) + 7 + "px";
        const confettiBackground =
          this.confettiColors[
            Math.floor(Math.random() * this.confettiColors.length)
          ];
        const confettiLeft =
          Math.floor(Math.random() * this.el.offsetWidth) + "px";
        const confettiAnimation =
          this.confettiAnimations[
            Math.floor(Math.random() * this.confettiAnimations.length)
          ];

        confettiEl.classList.add(
          "confetti",
          "confetti--animation-" + confettiAnimation
        );
        confettiEl.style.left = confettiLeft;
        confettiEl.style.width = confettiSize;
        confettiEl.style.height = confettiSize;
        confettiEl.style.backgroundColor = confettiBackground;

        confettiEl.removeTimeout = setTimeout(function () {
          confettiEl.parentNode.removeChild(confettiEl);
        }, 3000);

        this.containerEl.appendChild(confettiEl);
      }, 25);
    };

    new Confettiful(document.querySelector(".js-container"));
  }, []);

  return (
    <div>
      <div className="js-container container" style={{ top: "0px" }}></div>

      <div
        style={{
          textAlign: "center",
          marginTop: "30px",
          position: "fixed",
          width: "100%",
          height: "100%",
          top: "0px",
          left: "0px",
        }}
        className="align-middle"
      >
        <div className="flex justify-center">
          <img src={logo} alt="Logo" className="w-52" />
        </div>
        <div className="checkmark-circle mt-20">
          <div className="background"></div>
          <div className="checkmark draw"></div>
        </div>
        <h1 className="font-semibold text-xl">Congratulations!</h1>
        <p className="font-semibold text-xl">You Have Successfully Submit.</p>
        <button
          className="submit-btn mt-4 "
          type="submit"
          onClick={(e) => navigate(`/user`)}
        >
          Continue
        </button>
      </div>
    </div>
  );
}
