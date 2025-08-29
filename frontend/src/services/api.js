
const API_BASE_URL = 'http://localhost:5000';

// Scientific Caclulator API
export const calculateScientific = async (operation, operand1, operand2 = null) => {
    try {
        const response = await fetch(`${API_BASE_URL}/api/scientific/calculate`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                operation,
                operand1,
                operand2
            })
        });

        const data = await response.json();

        if (!response.ok) {
            throw new Error(data.error || 'Scientific calculation failed');
        }

        return data.result;
    } catch (error) {
        console.error('Scientific API Error:', error);
        throw error;
    }
};

// Binary Calculator API
export const calculateBinary = async (operation, operand1, operand2) => {
    try {
        const response = await fetch(`${API_BASE_URL}/api/binary/calculate`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                operation,
                operand1,
                operand2
            })
        });

        const data = await response.json();

        if (!response.ok) {
            throw new Error(data.error || 'Binary calculation failed');
        }

        return data;
    } catch (error) {
        console.error('Binary API Error:', error);
        throw error;
    }
};

// Get binary calculator info
export const getBinaryInfo = async () => {
    try {
        const response = await fetch(`${API_BASE_URL}/api/binary/info`);
        const data = await response.json();

        if (!response.ok) {
            throw new Error('Failed to get binary info');
        }

        return data;
    } catch (error) {
        console.error('Binary Info API Error', error);
        throw error;
    }
};

