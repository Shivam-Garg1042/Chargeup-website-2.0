 # Google Forms Integration Setup Guide

## Step-by-Step Instructions to Connect Your Contact Form to Google Forms

### Step 1: Create a Google Form

1. Go to [Google Forms](https://forms.google.com)
2. Click on "Blank form" to create a new form
3. Give your form a title like "Website Contact Form"

### Step 2: Add Form Fields

Add these fields to match your contact form:

1. **Name Field**
   - Click "+" to add a question
   - Question: "Name" 
   - Type: "Short answer"
   - Mark as "Required"

2. **Contact Field**
   - Add another question
   - Question: "Contact" 
   - Type: "Short answer"
   - Mark as "Required"

3. **Message Field**
   - Add another question
   - Question: "Message"
   - Type: "Paragraph"
   - Mark as "Required"

### Step 3: Get the Form URL and Field IDs

1. Click "Send" button in your Google Form
2. Copy the form URL (it will look like: `https://docs.google.com/forms/d/e/FORM_ID/viewform`)
3. Open the form URL in a new tab
4. Right-click and select "View Page Source" or press `Ctrl+U`
5. Search for `entry.` in the source code
6. You'll find field IDs like:
   - `entry.123456789` (for Name field)
   - `entry.987654321` (for Contact field) 
   - `entry.555666777` (for Message field)

### Step 4: Update Your Code

Replace the placeholders in `Contact.tsx`:

```typescript
const GOOGLE_FORM_URL = 'https://docs.google.com/forms/d/e/YOUR_ACTUAL_FORM_ID/formResponse';

// Replace these with your actual field IDs from step 3
formDataToSubmit.append('entry.YOUR_NAME_FIELD_ID', formData.name);
formDataToSubmit.append('entry.YOUR_CONTACT_FIELD_ID', formData.contact);
formDataToSubmit.append('entry.YOUR_MESSAGE_FIELD_ID', formData.message);
```

### Step 5: Set Up Response Collection

1. In your Google Form, click on "Responses" tab
2. Click the Google Sheets icon to create a spreadsheet for responses
3. This will automatically collect all form submissions

### Example Configuration

If your form URL is:
```
https://docs.google.com/forms/d/e/1FAIpQLSdXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX/viewform
```

Then your submission URL should be:
```
https://docs.google.com/forms/d/e/1FAIpQLSdXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX/formResponse
```

### Step 6: Test the Integration

1. Fill out your website contact form
2. Check your Google Form responses to see if the data appears
3. Check the linked Google Sheet for the submitted data

### Alternative Method: Using Google Apps Script

If you need more control or want to send confirmation emails, you can:

1. Create a Google Apps Script web app
2. Connect it to your Google Form/Sheet
3. Use that endpoint instead of the direct form submission

### Troubleshooting

- **CORS Issues**: The `mode: 'no-cors'` handles this, but you won't get response status
- **Field IDs**: Make sure you're using the correct `entry.` IDs from the form source
- **Form URL**: Ensure you're using `/formResponse` not `/viewform`

### Security Note

Since this is client-side submission, your form URL will be visible. For sensitive data, consider using a backend proxy or Google Apps Script.