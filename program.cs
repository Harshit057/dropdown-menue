@page "/dropdown"

<h3>Reactive Dropdown Menu</h3>

<div class="dropdown">
    <button class="dropdown-header" @onclick="ToggleDropdown">
        @selectedItem
    </button>
    <ul class="dropdown-list" style="@GetDropdownVisibility()">
        @foreach (var item in items)
        {
            <li class="dropdown-item" @onclick="() => SelectItem(item)">
                @item
            </li>
        }
    </ul>
</div>

<p>You selected: <strong>@selectedItem</strong></p>

@code {
    private List<string> items = new List<string> { "Item 1", "Item 2", "Item 3", "Item 4" };
    private string selectedItem = "Select an item";
    private bool isDropdownOpen = false;

    private void ToggleDropdown()
    {
        isDropdownOpen = !isDropdownOpen;
    }

    private void SelectItem(string item)
    {
        selectedItem = item;
        isDropdownOpen = false;
    }

    private string GetDropdownVisibility()
    {
        return isDropdownOpen ? "display: block;" : "display: none;";
    }
}
