

// Navbar Toggle
document.addEventListener('DOMContentLoaded', function () {

    var $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);
  

    if ($navbarBurgers.length > 0) {
  

      $navbarBurgers.forEach(function ($el) {
        $el.addEventListener('click', function () {
  

          var $target = document.getElementById('main-nav');
  
          $target.classList.toggle('hidden');
  
        });
      });
    }
  
  });

export default function Navbar() {
    return <nav class="w-full h-24">
<nav>

        <div class="py-4 px-2 lg:mx-4 xl:mx-12">
            <div class="">
                <nav class="flex items-center justify-between flex-wrap  ">
                    <div class="block lg:hidden">
                        <button
                            class="navbar-burger flex items-center px-3 py-2 border rounded text-white border-white hover:text-white hover:border-white">
                            <svg class="fill-current h-6 w-6 text-gray-700" viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg">
                                <title>Menu</title>
                                <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
                            </svg>
                        </button>
                    </div>
                    <div id="main-nav" class="w-full flex-grow lg:flex items-center lg:w-auto hidden  ">
                        <div class="text-sm lg:flex-grow  animated jackinthebox mt-4">
                            <a href="/"
                                class="block lg:inline-block text-3xl font-bold  text-orange-500   hover:text-orange-500 mx-2 focus:text-gray-500  p-1 hover:bg-gray-300 sm:hover:bg-transparent rounded-lg">
                                Fintools
                            </a>
                            <p class="pt-2">
                            <a href="/debt"
                                class="block lg:inline-block text-md font-bold  text-gray-900   hover:text-orange-500 mx-2 focus:text-gray-500  p-1 hover:bg-gray-300 sm:hover:bg-transparent rounded-lg">
                                DEBT CALCULATOR
                            </a>
                            <a href="/investing"
                                class="block lg:inline-block text-md font-bold  text-gray-900    hover:text-orange-500 mx-2 focus:text-gray-500   p-1 hover:bg-gray-300 sm:hover:bg-transparent rounded-lg">
                                INVESTING
                            </a>
                            <a href="/contact"
                                class="block lg:inline-block text-md font-bold  text-gray-900    hover:text-orange-500 mx-2 focus:text-gray-500  p-1 hover:bg-gray-300 sm:hover:bg-transparent rounded-lg">
                                CONTACT
                            </a>
                            </p>
                        </div>
                    </div>
                </nav>
            </div>
        </div>
  
</nav>





    </nav>
}