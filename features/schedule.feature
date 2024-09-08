Feature: Schedule verification

    Scenario: Request timeout check
        When I make a GET request to "https://testapi.io/api/RMSTest/ibltest"
        Then I should see the HTTP status code of the response is 200
        And the response time of the request is below 1000 milliseconds

    Scenario: Id and episode fields check
        When I make a GET request to "https://testapi.io/api/RMSTest/ibltest"  
        Then I should see the "id" field is never null or empty for all items
        And the "type" in "episode" for every item is always "episode"

    Scenario: Title check
        When I make a GET request to "https://testapi.io/api/RMSTest/ibltest"
        Then I should see the "title" field in "episode" is never null or empty for any schedule item

    Scenario: Live episode check
        When I make a GET request to "https://testapi.io/api/RMSTest/ibltest"
        Then I should see the only one episode in the list has "live" field in "episode" as "true"

    Scenario: Transmission date check
        When I make a GET request to "https://testapi.io/api/RMSTest/ibltest"
        Then I should see the "transmission_start" date value is before the "transmission_end" date

    Scenario: Date in the response header check
        When I make a GET request to "https://testapi.io/api/RMSTest/ibltest"
        Then I should see the "Date" value in the response header

    Scenario: Bad request check
        When I make a GET request to "https://testapi.io/api/RMSTest/ibltest/2023-09-11"
        Then I should see the HTTP status code of the response is 404
        And the error object has the properties:
            | Property Name      |
            | details            |
            | http_response_code |
