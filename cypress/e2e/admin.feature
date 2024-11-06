Feature: Page functionality

  Scenario: System User Search
    Given I am on the admin page
    When I type and submit a user search
    Then I should see the updated user search list

    When I click the add user button
    Then I should be taken to the add user page