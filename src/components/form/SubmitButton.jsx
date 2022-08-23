import './SubmitButton.css';
export default function SubmitButton({ text }) {
  return (
    <div className="divbtn">
      <button className="submit_btn">{text}</button>
    </div>
  );
}
