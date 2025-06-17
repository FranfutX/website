export default function Footer() {
  return (
    <footer className="w-full text-center py-1 text-gray-500 text-sm border-t border-gray-700 mt-16">
      <p>
        © {new Date().getFullYear()} By Franco Martelane. Built with React & Tailwind CSS. Good old footer.
      </p>
    </footer>
  );
}
