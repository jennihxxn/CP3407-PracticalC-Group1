## User Story 1 – Register Gym Users via Online Form

**Description:**  
As a new gym user, I want to register online using a form so that I can access the gym services without physically going to the counter.

**Testing Approach:**  
Manual functional testing in the browser to confirm the registration process works as described in the user story.

---

### Test Cases

| Test ID     | Test Type   | Steps                                                                                                                                      | Expected Result                                                       | Actual Result | Status |
|-------------|-------------|--------------------------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------|---------------|--------|
| US1-TC01    | Functional  | 1. Navigate to **Register** page.<br>2. Fill in all required fields with valid details.<br>3. Click **Submit**.                            | Registration succeeds and a success message is displayed.             | As expected   |    Pass |
| US1-TC02    | Validation  | 1. Navigate to **Register** page.<br>2. Leave one required field (e.g., Email) blank.<br>3. Click **Submit**.                              | Error message appears asking the user to complete the missing field.  | As expected   |    Pass |
| US1-TC03    | Validation  | 1. Navigate to **Register** page.<br>2. Enter an invalid email format.<br>3. Click **Submit**.                                             | Error message appears indicating the email format is invalid.         | As expected   |    Pass |

---

**Result:**  
All test cases passed. The registration form works as intended, validates required fields, and provides clear feedback for incorrect inputs.

---

## User Story 2 – Book Gym Sessions and Get Confirmation

**Description:**  
As a gym user, I want to view available time slots, book gym sessions online, and receive a confirmation message so that I can ensure my reservation is successful and secure my preferred time.

**Testing Approach:**  
Manual functional testing in the browser to confirm viewing time slots, booking a slot, and receiving confirmation.

---

### Test Cases

| Test ID   | Test Type  | Steps                                                                                                                                         | Expected Result                                                     | Actual Result | Status |
|-----------|------------|-----------------------------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------|---------------|--------|
| US2-TC01  | Functional | 1. Navigate to **Book Sessions** page.<br>2. Select a date.                                                                                   | Available time slots for that date are displayed.                   | As expected   | Pass   |
| US2-TC02  | Functional | 1. On **Book Sessions**, select a date and an available time slot.<br>2. Click **Book**.                                                      | Booking succeeds and a confirmation message is shown.               | As expected   | Pass    |
| US2-TC04  | Functional | 1. Complete a booking for a specific time slot.<br>2. Return to the same date view.                                                           | The booked slot is marked as **Booked/Unavailable** (state updated).| As expected   | Pass   |

---

**Result:**  
All test cases passed. Users can view slots, book a session successfully, and receive a clear confirmation.

---

## User Story 3 – Choose and Purchase Gym Cards

**Description:**  
As a user, I want to view different gym card options and purchase the one that suits my needs so that I can activate my membership easily.

**Testing Approach:**  
Manual functional testing in the browser to confirm gym card options are displayed, purchase works, and confirmation is shown.

---

### Test Cases

| Test ID   | Test Type  | Steps                                                                                                                          | Expected Result                                                       | Actual Result | Status |
|-----------|------------|--------------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------|---------------|--------|
| US3-TC01  | Functional | 1. Navigate to **Gym Cards** page.                                                                                             | All available gym card options are displayed with correct details.    | As expected   | Pass   |
| US3-TC02  | Functional | 1. Select a gym card option.<br>2. Click **Purchase**.<br>3. Complete the payment flow (mock/local).                           | Purchase succeeds and a confirmation message is displayed.            | As expected   | Pass   |

---

**Result:**  
All test cases passed. Users can view gym card options, make a purchase, and receive a confirmation message as intended.

---

## User Story 4 – View Available Workout Programs

**Description:**  
As a user, I want to browse the different workout activities and teams, so that I can decide which one to join.

**Testing Approach:**  
Manual functional testing in the browser to confirm programs load, can be browsed by category/team, and details can be viewed.

---

### Test Cases

| Test ID   | Test Type  | Steps                                                                                                       | Expected Result                                                         | Actual Result | Status |
|-----------|------------|-------------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------|---------------|--------|
| US4-TC01  | Functional | 1. Navigate to **Workout Programs** page.                                                                   | A list/grid of available programs is displayed with titles and summaries.| As expected   | Pass   |
| US4-TC02  | Functional | 1. On **Workout Programs**, select a category/team.                                                         | The list updates to show only programs for the selected category/team.   | As expected   | Pass   |
| US4-TC03  | Functional | 1. Click a program card (any category).                                                                     | Program **details view** opens showing title, description, schedule, etc.| As expected   | Pass   |

---

**Result:**  
All functional cases passed. Users can browse programs, filter by category/team, and view program details as intended.

---

## User Story 5 – Read Latest Club News

**Description:**  
As a user, I want to read current announcements and events posted by the gym so that I can stay informed about upcoming activities and programs.

**Testing Approach:**  
Manual functional testing in the browser to confirm news items are displayed immediately and can also be viewed in a popup format.

---

### Test Cases

| Test ID   | Test Type  | Steps                                                                                  | Expected Result                                                                                         | Actual Result | Status |
|-----------|------------|----------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------------|---------------|--------|
| US5-TC01  | Functional | 1. Navigate to **News** page.                                                          | All latest news items are displayed directly with title, date, and short summary.                       | As expected   | Pass   |
| US5-TC02  | Functional | 1. On **News**, click a news item.                                                     | A **popup** opens showing the same content from the news item, in a larger popup view.                  | As expected   | Pass   |
| US5-TC03  | Functional | 1. In the **popup**, click the **Close** button or icon.                               | Popup closes and user returns to the news list view.                                                    | As expected   | Pass   |

---

**Result:**  
All functional cases passed. News items are visible immediately on the page, and clicking an item opens a popup showing in a larger format, which can be closed to return to the list.


---

## User Story 6 – Edit and Save User Profile

**Description:**  
As a gym user, I want to edit and save my personal profile information (like name and email) so that my contact details are always up to date.

**Testing Approach:**  
Manual functional testing in the browser to confirm profile information can be edited and saved successfully.

---

### Test Cases

| Test ID   | Test Type  | Steps                                                                                                 | Expected Result                                                                 | Actual Result | Status |
|-----------|------------|-------------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------|---------------|--------|
| US6-TC01  | Functional | 1. Navigate to **User Profile** page.                                                                 | Current profile information is displayed in editable form fields.               | As expected   | Pass   |
| US6-TC02  | Functional | 1. Update profile fields (e.g., change name and email).<br>2. Click **Save**.                         | Changes are saved and a success message is displayed.                           | As expected   | Pass   |
| US6-TC03  | Functional | 1. Refresh the page after saving changes.                                                             | Updated profile information is still displayed (changes persisted).              | As expected   | Pass   |

---

**Result:**  
All functional cases passed. Users can view their profile information, make edits, and save changes, which remain after page refresh.

---

## User Story 7 – Access Homepage for Easy Navigation

**Description:**  
As a user, I want a homepage that provides quick access to gym features (like booking, programs, cards, and news) so that I can easily navigate through the system.

**Testing Approach:**  
Manual functional testing in the browser to confirm the homepage loads and navigation links work correctly.

---

### Test Cases

| Test ID   | Test Type  | Steps                                                                                  | Expected Result                                                                  | Actual Result | Status |
|-----------|------------|----------------------------------------------------------------------------------------|----------------------------------------------------------------------------------|---------------|--------|
| US7-TC01  | Functional | 1. Navigate to the **Homepage**.                                                       | Homepage loads successfully with quick access links/buttons to main features.    | As expected   | Pass   |
| US7-TC02  | Functional | 1. On the homepage, click the **Book Sessions** link/button.                           | User is redirected to the booking page.                                          | As expected   | Pass   |
| US7-TC03  | Functional | 1. On the homepage, click the **Workout Programs** link/button.                        | User is redirected to the workout programs page.                                 | As expected   | Pass   |
| US7-TC04  | Functional | 1. On the homepage, click the **Gym Cards** link/button.                               | User is redirected to the gym cards page.                                        | As expected   | Pass   |
| US7-TC05  | Functional | 1. On the homepage, click the **News** link/button.                                    | User is redirected to the news page.                                             | As expected   | Pass   |

---

**Result:**  
All functional cases passed. The homepage loads successfully and provides working navigation to all key features.







