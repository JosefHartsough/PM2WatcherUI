import { FiPlay } from "react-icons/fi";
import { MdOutlineReplay } from "react-icons/md";
import { FiTrash2 } from "react-icons/fi";
import { MdSquare } from "react-icons/md";
import { ButtonProps } from "../types/types";

export default function Button({
  children,
  onClick,
  variant,
  size = "md",
  disabled,
  ...props
}: ButtonProps) {
  return (
    <button
      className={`btn_${variant} ${size}` + (disabled ? " disabled" : "")}
      style={{
        flex: "33.33%",
        cursor: disabled ? "not-allowed" : "pointer",
        paddingTop: "0.5rem",
        paddingBottom: "0.5rem",
        paddingLeft: "1rem",
        paddingRight: "1rem",
        margin: "0.5rem",
        borderRadius: "6px",
        fontWeight: "700",
        backgroundColor:
          variant === "start"
            ? "#3ec46d"
            : variant === "stop"
            ? "#f14668"
            : "#F3F4F6",
        color: variant === "start" ? "white" : undefined,
      }}
      onClick={onClick}
      disabled={disabled}
      {...props}
    >
      <span
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {(() => {
          switch (variant) {
            case "start":
              return <FiPlay style={{ marginRight: "10px" }} size={15} />;
            case "stop":
              return <MdSquare style={{ marginRight: "10px" }} size={15} />;
            case "restart":
              return (
                <MdOutlineReplay style={{ marginRight: "10px" }} size={15} />
              );
            case "delete":
              return <FiTrash2 style={{ marginRight: "10px" }} size={15} />;
          }
        })()}
        {children}
      </span>
    </button>
  );
}
