# Homage challenge answer

```bash
How would you test Homage Care Pro onboarding flow on https://apply.homage.sg/ ?

I would test Homage Care Pro onboarding flow first doing smoke test using End to End test cases
And then i would test functionality test using Acceptance Test-Driven Development test cases

1. Document test cases:
Given user apply pro care With professional healthcare experience and without using referral code should redirected to your application has been submitted page

Given user apply pro care Without professional healthcare experience and without using referral code should redirected to your application has been submitted page

Given user apply pro care Without professional healthcare experience and with using referral code should redirected to your application has been submitted page

Given user apply pro care with a single or more empty mandatory field, should show error message on the field

Given user apply pro care with an invalid email format, should show error message invalid email on the field

Given user type alphabet character or special character on phone number field, should not inputted on the phone number field

2. Implement automated tests on the top 3 test cases based on priority.
I implement the first 3 test cases on Cypress UI Test automation because the test cases are end to end level test cases, and the other test cases will be better if we as an Engineer automated it on Integration Automation Test level or do the test manually
```


