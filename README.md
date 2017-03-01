# harker-lunch :fries::curry::rice::meat_on_bone::hamburger::spaghetti::sushi::fried_shrimp:

A simple web application for Harker students to check whats for lunch.

## Usage

Go to [the Github IO page](http://aggarwalneeraj141.github.io/harker-lunch/) to access the schedule, or [tiny.cc/lunchmenu](https://tiny.cc/lunchmenu).

## How it works

- Will render each dish for each food station in columns, and stack the columns upon mobile window.
- Automatically hides previous days in the week by hiding the div for the respective day

## Key

In the provided menu by Harker, certain dishes are marked to be vegetarian, gluten-free, or both.

We use this information to show to the user, by showing color in the table cell for the dish. The classes `.veggie`, `.gf`, and `.veggie_gf` are used to provide a simple color key for the user to identify the dishes respectively.