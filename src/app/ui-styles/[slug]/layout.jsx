export default function UIStyleDetailLayout({ children }) {
  return (
    <div className="ui-style-detail fixed inset-0 z-[200] overflow-y-auto">
      {children}
    </div>
  );
}
