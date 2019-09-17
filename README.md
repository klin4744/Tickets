# Ticket App By Kevin Lin

## Getting Started / Viewing Part 2

I've commented out the code for part two but it is still availible in this source code repository. If you'd like to view the regular select component, follow the following steps:
<br>

1. Fork this repo and clone it to a local repo

```
git clone https://github.com/yourUserId/Tickets.git
```
2. Install dependecies in project folder:
```
npm install
```
3. Navigate to <code>src/Components/EventList.js</code> and uncomment out the commented code, there is a note on the actual file
   <br>

4. To view on your local machine, in the projects root directory, open a terminal and run:

```
npm start
```

Here is a deployed version of the application:
https://tickets-vgg.herokuapp.com

### Please try viewing this project in different viewports, I tried to make it responsive!

## Part 3

Q1 - Tell us about the possible reasons that the filter your implemented in part 2 did not help the customer experience.
Using a filter through a select is harder to use because the user still has to scroll through a gigantic list of venues to find the event they're looking for. There isn't much benefit unless there are a ton of tickets to begin with, since the user still has to scan.
<br>
Q2 - What could you change to improve the filter experience, and why do you think it would be better for the customer?
If the user had an input with a suggestion engine, I think it'd be more helpful because they can then just lookup and location/venu without needing to scan through a select. It'd be even better if the application could detect their location and present tickets within a fixed radius around them unless they elect out.

NOTE: I've commented out the select from part 2 and replaced it with a search bar, if it is uncommented it is still functional!
