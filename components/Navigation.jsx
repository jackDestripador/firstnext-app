import Link from 'next/link';
function Navigation(){
return (
<div>

  <ul>
    <li>
      <Link href='/'>Home</Link>
    </li>
  </ul>
  <ul>
    <li>
      <Link href='/about'>About</Link>
    </li>
  </ul>
  <ul>
    <li>
      <Link href='/services'>Services</Link>
    </li>
  </ul>
</div>
)
}
export default Navigation