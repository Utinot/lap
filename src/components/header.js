const Header = {
  render() {
    return /*html*/`
        <div class="bg-blue-800 py-4">
        <a href="">
          <img src="https://picsum.photos/150/40" alt="" class="mx-auto">
        </a>
      </div>
      <div class="bg-orange-500">
          <div class="float-right"> 
            <button  class="bg-violet-500 hover:bg-violet-400 active:bg-violet-600 focus:outline-none focus:ring focus:ring-violet-300 ..."> tìm kiếm </button>
            <input type="text" placeholder="tìm kiếm ..."  class="scroll-mt-6">
          </div>
        <ul class="flex">
          <li><a href="/" class="block px-4 py-3 hover:bg-indigo-500 hover:text-white">Home </a></li>
          <li><a href="/about" class="block px-4 py-3 hover:bg-indigo-500 hover:text-white">About</a></li>
          <li><a href="/news" class="block px-4 py-3 hover:bg-indigo-500 hover:text-white">News</a></li>
          <li><a href="/contact" class="block px-4 py-3 hover:bg-indigo-500 hover:text-white">Contact</a></li>
        </ul>

      </div>
        `;
  },
};
export default Header;