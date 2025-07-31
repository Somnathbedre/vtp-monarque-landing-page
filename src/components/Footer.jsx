export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-10">
      <div className="container mx-auto px-4 text-center">
        <p className="text-sm">&copy; {new Date().getFullYear()} VTP Monarque. All Rights Reserved.</p>
        <p className="text-xs text-gray-400 mt-2">Designed by SB Web Design</p>
      </div>
    </footer>
  );
}
