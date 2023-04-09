import Link from 'next/link';
function Navigation(){
return (

<div>
  <nav class="navbar navbar-expand-lg bg-body-tertiary">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">Barra de navegación</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav ms-auto">
          <li class="nav-item">
            <Link class="nav-link active" aria-current="page" href="/">Home</Link>

          </li>
          <li class="nav-item">
            <Link class="nav-link" href="/about">About</Link>
          </li>

          <li class="nav-item">
            <Link class="nav-link" href='/services'>Services</Link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</div>
)
}
export default Navigation