const states = [
    { state: 'Alabama', state_slug: 'alabama', country: 'USA', country_slug: 'usa' },
    { state: 'Tennessee', state_slug: 'tennessee', country: 'USA', country_slug: 'usa' },
    { state: 'Georgia', state_slug: 'georgia', country: 'USA', country_slug: 'usa' },
    { state: 'Florida', state_slug: 'florida', country: 'USA', country_slug: 'usa' },
    { state: 'North Carolina', state_slug: 'north-carolina', country: 'USA', country_slug: 'usa' },
    { state: 'Texas', state_slug: 'texas', country: 'USA', country_slug: 'usa' },
    { state: 'Louisiana', state_slug: 'louisiana', country: 'USA', country_slug: 'usa' },
    { state: 'Oklahoma', state_slug: 'oklahoma', country: 'USA', country_slug: 'usa' },
    { state: 'Arkansas', state_slug: 'arkansas', country: 'USA', country_slug: 'usa' },
    { state: 'Missouri', state_slug: 'missouri', country: 'USA', country_slug: 'usa' },
    { state: 'Kansas', state_slug: 'kansas', country: 'USA', country_slug: 'usa' },
    { state: 'Nebraska', state_slug: 'nebraska', country: 'USA', country_slug: 'usa' },
    { state: 'Iowa', state_slug: 'iowa', country: 'USA', country_slug: 'usa' },
    { state: 'Minnesota', state_slug: 'minnesota', country: 'USA', country_slug: 'usa' },
    { state: 'South Dakota', state_slug: 'south-dakota', country: 'USA', country_slug: 'usa' },
    { state: 'North Dakota', state_slug: 'north-dakota', country: 'USA', country_slug: 'usa' },
    { state: 'Wisconsin', state_slug: 'wisconsin', country: 'USA', country_slug: 'usa' },
    { state: 'Illinois', state_slug: 'illinois', country: 'USA', country_slug: 'usa' },
    { state: 'Michigan', state_slug: 'michigan', country: 'USA', country_slug: 'usa' },
    { state: 'Ohio', state_slug: 'ohio', country: 'USA', country_slug: 'usa' },
    { state: 'Kentucky', state_slug: 'kentucky', country: 'USA', country_slug: 'usa' },
    { state: 'Indiana', state_slug: 'indiana', country: 'USA', country_slug: 'usa' },
    { state: 'Virginia', state_slug: 'virginia', country: 'USA', country_slug: 'usa' },
    { state: 'West Virginia', state_slug: 'west-virginia', country: 'USA', country_slug: 'usa' },
    { state: 'Pennsylvania', state_slug: 'pennsylvania', country: 'USA', country_slug: 'usa' },
    { state: 'Maryland', state_slug: 'maryland', country: 'USA', country_slug: 'usa' },
    { state: 'Delaware', state_slug: 'delaware', country: 'USA', country_slug: 'usa' },
    { state: 'New York', state_slug: 'new-york', country: 'USA', country_slug: 'usa' },
    { state: 'New Jersey', state_slug: 'new-jersey', country: 'USA', country_slug: 'usa' },
    { state: 'Connecticut', state_slug: 'connecticut', country: 'USA', country_slug: 'usa' },
    { state: 'Colorado', state_slug: 'colorado', country: 'USA', country_slug: 'usa' },
    { state: 'Wyoming', state_slug: 'wyoming', country: 'USA', country_slug: 'usa' },
    { state: 'Utah', state_slug: 'utah', country: 'USA', country_slug: 'usa' },
    { state: 'Arizona', state_slug: 'arizona', country: 'USA', country_slug: 'usa' },
    { state: 'North California', state_slug: 'north-california', country: 'USA', country_slug: 'usa' },
    { state: 'North Nevada', state_slug: 'north-nevada', country: 'USA', country_slug: 'usa' },
    { state: 'South and Central California', state_slug: 'south-and-central-california', country: 'USA', country_slug: 'usa' },
    { state: 'South and Central California', state_slug: 'south-and-central-california', country: 'USA', country_slug: 'usa' },
    { state: 'Nevada, Vegas', state_slug: 'nevada-vegas', country: 'USA', country_slug: 'usa' },
    { state: 'Washington', state_slug: 'washington', country: 'USA', country_slug: 'usa' },
    { state: 'Alaska', state_slug: 'alaska', country: 'USA', country_slug: 'usa' },
    { state: 'Hawaii', state_slug: 'hawaii', country: 'USA', country_slug: 'usa' },
    { state: 'Oregon', state_slug: 'oregon', country: 'USA', country_slug: 'usa' },
    { state: 'Montana', state_slug: 'montana', country: 'USA', country_slug: 'usa' },
    { state: 'Massachusetts', state_slug: 'massachusetts', country: 'USA', country_slug: 'usa' },
    { state: 'Rhode Island', state_slug: 'rhode-island', country: 'USA', country_slug: 'usa' },
    { state: 'Vermont', state_slug: 'vermont', country: 'USA', country_slug: 'usa' },
    { state: 'Maine', state_slug: 'maine', country: 'USA', country_slug: 'usa' },
    { state: 'New Hampshire', state_slug: 'new-hampshire', country: 'USA', country_slug: 'usa' },
    { state: 'British Columbia', state_slug: 'british-columbia', country: 'Canada', country_slug: 'canada' },
    { state: 'Alberta', state_slug: 'alberta', country: 'Canada', country_slug: 'canada' },
    { state: 'Saskatchewan', state_slug: 'saskatchewan', country: 'Canada', country_slug: 'canada' },
    { state: 'MAnitoba', state_slug: 'manitoba', country: 'Canada', country_slug: 'canada' },
    { state: 'South Western Ontario', state_slug: 'south-western-ontario', country: 'Canada', country_slug: 'canada' },
    { state: 'Southern Ontario', state_slug: 'southern-ontario', country: 'Canada', country_slug: 'canada' },
    { state: 'Ontario, Greater Toronto Area', state_slug: 'ontario-greater-toronto-area', country: 'Canada', country_slug: 'canada' },
    { state: 'Eastern Ontario', state_slug: 'eastern-ontario', country: 'Canada', country_slug: 'canada' },
    { state: 'Nothern Ontario', state_slug: 'northern-ontario', country: 'Canada', country_slug: 'canada' },
    { state: 'Quebec', state_slug: 'quebec', country: 'Canada', country_slug: 'canada' },
    { state: 'New Brunswick', state_slug: 'new-brunswick', country: 'Canada', country_slug: 'canada' },
    { state: 'Nova Scotia', state_slug: 'nova-scotia', country: 'Canada', country_slug: 'canada' },
    { state: 'PEI', state_slug: 'pei', country: 'Canada', country_slug: 'canada' },
    { state: 'New Foundland and Labrador', state_slug: 'newfoundland-and-labrador', country: 'Canada', country_slug: 'canada' },
];





// Populate country dropdown dynamically
const countryDropdown = $('#country');
const uniqueCountries = [...new Set(states.map(stateData => stateData.country))];
uniqueCountries.forEach(country => {
    countryDropdown.append($('<option>', {
        value: country,
        text: country
    }));
});

// Handle country dropdown change
countryDropdown.on('change', function () {
    const selectedCountry = $(this).val();
    updateStateDropdown(selectedCountry);
});

function updateStateDropdown(selectedCountry) {
    const stateDropdown = $('#state');
    stateDropdown.empty();

    // Populate state dropdown based on selected country
    states.forEach(stateData => {
        if (stateData.country === selectedCountry) {
            stateDropdown.append($('<option>', {
                value: stateData.state_slug,
                text: stateData.state
            }));
        }
    });

    // Trigger change event to update the displayed state
    stateDropdown.trigger('change');
}

// Handle state dropdown change
const stateDropdown = $('#state');
stateDropdown.on('change', function () {
    const selectedStateSlug = $(this).val();
    showSelectedState(selectedStateSlug);
});

function showSelectedState(selectedStateSlug) {
    // Hide all state data divs and show the selected one with fade effect
    $('.state-datas > div').hide('slow');
    $('#' + selectedStateSlug).show('slow');
}

// Initially select the first country and populate the state dropdown with the first state
const initialCountry = uniqueCountries[0];
countryDropdown.val(initialCountry);
updateStateDropdown(initialCountry);




/*

// Populate country dropdown dynamically
const countryDropdown = $('#country');
const uniqueCountries = [...new Set(states.map(stateData => stateData.country))];
uniqueCountries.forEach(country => {
    countryDropdown.append($('<option>', {
        value: country, // Set value to the actual country name
        text: country
    }));
});

// Handle country dropdown change
countryDropdown.on('change', function () {
    const selectedCountry = $(this).val();
    updateStateDropdown(selectedCountry);
});

function updateStateDropdown(selectedCountry) {
    const stateDropdown = $('#state');
    stateDropdown.empty();

    // Populate state dropdown based on selected country
    states.forEach(stateData => {
        if (stateData.country === selectedCountry) {
            stateDropdown.append($('<option>', {
                value: stateData.state_slug,
                text: stateData.state
            }));
        }
    });
}

// Initially select the first country and populate the state dropdown with the first state
const initialCountry = uniqueCountries[0];
countryDropdown.val(initialCountry);
updateStateDropdown(initialCountry);

// Select the first state in the state dropdown
const initialState = states.find(stateData => stateData.country === initialCountry);
if (initialState) {
    stateDropdown.val(initialState.state_slug);
}

*/