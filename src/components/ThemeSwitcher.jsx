import { FiSun } from "react-icons/fi";
import { FiMoon } from "react-icons/fi";
import { styled } from "styled-components";

const ThemeSwitcherStyle = styled.div`
  label {
    --gap: 5px;
    --size: 20px;

    height: 30px;
    width: 55px;
    padding: 0 5px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    cursor: pointer;
    position: relative;
    background-color: #cfc8f4;
    border-radius: 50px;
    z-index: 1;

    .icon {
      height: var(--size);
      width: var(--size);
      display: flex;
      justify-content: center;
      align-items: center;
    }
    svg {
      width: 75%;
      color: var(--white);
    }
  }

  input {
    display: none;
    visibility: hidden;
  }
  label::after {
    content: "";
    background-color: var(--mediumSlateBlue);
    position: absolute;
    width: var(--size);
    height: var(--size);
    border-radius: 50%;
    transform: translateY(-50%);
    top: 50%;
    left: var(--gap);
    z-index: -1;
    transition: 0.5s ease left;
  }
  input:checked + label::after{
    left: calc(100% - var(--gap) - var(--size))
  }
`;

export default function ThemeSwitcher() {
  return (
    <ThemeSwitcherStyle>
      <input type="checkbox" id="switcher" />
      <label htmlFor="switcher">
        <div className="icon">
          <FiSun />
        </div>
        <div className="icon">
          <FiMoon />
        </div>
      </label>
    </ThemeSwitcherStyle>
  );
}
