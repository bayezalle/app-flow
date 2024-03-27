
import { Navbar, NavbarCollapse, NavbarToggle,Dropdown,DropdownItem } from "flowbite-react";

function Header() {
  return (
    <>
    <Navbar fluid rounded>
      <div className="flex md:order-2 ">
        <NavbarToggle />
      </div>
      <div className="me-auto text-bold text-lime-900">
      <NavbarCollapse>
        <Dropdown label="ZEITSCHRIFTEN" inline>
          <DropdownItem>Dashboard</DropdownItem>
          <DropdownItem>Settings</DropdownItem>
          <DropdownItem>Earnings</DropdownItem>
          <DropdownItem>Sign out</DropdownItem>
        </Dropdown>
        <Dropdown label="PRODUKTE" inline>
          <DropdownItem>Dashboard</DropdownItem>
          <DropdownItem>Settings</DropdownItem>
          <DropdownItem>Earnings</DropdownItem>
          <DropdownItem>Sign out</DropdownItem>
        </Dropdown>
        <Dropdown label="LANDWIRTSCHAFT" inline>
          <DropdownItem>Dashboard</DropdownItem>
          <DropdownItem>Settings</DropdownItem>
          <DropdownItem>Earnings</DropdownItem>
          <DropdownItem>Sign out</DropdownItem>
        </Dropdown>
        <Dropdown label="FORSTWIRTSCHAFT" inline>
          <DropdownItem>Dashboard</DropdownItem>
          <DropdownItem>Settings</DropdownItem>
          <DropdownItem>Earnings</DropdownItem>
          <DropdownItem>Sign out</DropdownItem>
        </Dropdown>
        <Dropdown label="JAGD" inline>
          <DropdownItem>Dashboard</DropdownItem>
          <DropdownItem>Settings</DropdownItem>
          <DropdownItem>Earnings</DropdownItem>
          <DropdownItem>Sign out</DropdownItem>
        </Dropdown>
        <Dropdown label="GARTEN" inline>
          <DropdownItem>Dashboard</DropdownItem>
          <DropdownItem>Settings</DropdownItem>
          <DropdownItem>Earnings</DropdownItem>
          <DropdownItem>Sign out</DropdownItem>
        </Dropdown>
        <Dropdown label="IMKEREI" inline>
          <DropdownItem>Dashboard</DropdownItem>
          <DropdownItem>Settings</DropdownItem>
          <DropdownItem>Earnings</DropdownItem>
          <DropdownItem>Sign out</DropdownItem>
        </Dropdown>
        </NavbarCollapse>
        </div>
        
    </Navbar>
    <div className="col-md mt-5 mb-5">
          <form class="max-w-7xl">   
              <div class="relative">
                  <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                      <svg class="w-4 h-4 text-lime-500 dark:text-lime-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                      </svg>
                  </div>
                  <input type="search" id="default-search" 
                  class="block w-full p-3 ps-10 text-md text-lime-900 
                  border border-2 border-lime-900 rounded-lg focus:ring-blue-500 focus:border-lime-500
                   dark:bg-white-700 dark:border-lime-600 dark:placeholder-lime-400 dark:text-lime-300 
                   dark:focus:ring-lime-500 dark:focus:border-lime-500" 
                   placeholder="Search Mockups, Logos..." required />
              </div>
          </form>
      </div>
    </>
  );
}
export default Header