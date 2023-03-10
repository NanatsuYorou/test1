import React from "react";
import { clsx } from "clsx";
import styles from "./button.module.scss";

export default function Button({ caption, id = "", isBtnHighlighted = false }) {
  return (
    <button
      type="button"
      className={clsx(
        styles.button,
        isBtnHighlighted && styles.buttonHighlighted
      )}
      id={id}
    >
      {caption}
    </button>
  );
}
