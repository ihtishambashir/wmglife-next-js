export default function Footer(){
  return (
    <footer className="mt-0 bg-gray-900 on-dark">
      <div className="container-narrow py-12 grid gap-6 md:grid-cols-3">
        <div>
          <h3 className="text-lg font-semibold text-white">Wealth Management Group</h3>
          <p className="mt-2 text-sm text-white">Life Insurance and Investment Broker</p>
        </div>
        <div>
          <h4 className="font-semibold text-white">Contact</h4>
          <ul className="mt-2 text-sm text-white space-y-1">
            <li>1101 Brickell Ave Suite 800, Miami, FL 33131</li>
            <li>Phone: (800) 890-4525</li>
            <li>Email: info@wmglife.com</li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold text-white">Hours</h4>
          <ul className="mt-2 text-sm text-white space-y-1">
            <li>Mon - Fri: 8:00AM - 5:00PM</li>
            <li>Sat & Sun: Closed</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="container-narrow py-6 text-sm text-white text-center">© {new Date().getFullYear()} Wealth Management Group. All rights reserved.</div>
      </div>
    </footer>
  );
}
