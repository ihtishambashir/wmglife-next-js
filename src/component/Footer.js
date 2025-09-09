export default function Footer(){
  return (
    <footer className="mt-24 border-t border-gray-200">
      <div className="container-narrow py-12 grid gap-6 md:grid-cols-3">
        <div>
          <h3 className="text-lg font-semibold text-brand">Wealth Management Group</h3>
          <p className="mt-2 text-sm text-gray-600">Life Insurance and Investment Broker</p>
        </div>
        <div>
          <h4 className="font-semibold">Contact</h4>
          <ul className="mt-2 text-sm text-gray-600 space-y-1">
            <li>1101 Brickell Ave Suite 800, Miami, FL 33131</li>
            <li>Phone: (800) 890-4525</li>
            <li>Email: info@wmglife.com</li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold">Hours</h4>
          <ul className="mt-2 text-sm text-gray-600 space-y-1">
            <li>Mon - Fri: 8:00AM - 5:00PM</li>
            <li>Sat & Sun: Closed</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-gray-200">
        <div className="container-narrow py-6 text-sm text-gray-500">© {new Date().getFullYear()} Wealth Management Group. All rights reserved.</div>
      </div>
    </footer>
  );
}
