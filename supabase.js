// Initialize Supabase
const supabaseUrl = 'https://your-supabase-url.supabase.co';
const supabaseKey = 'your-supabase-key';
const supabase = supabase.createClient(supabaseUrl, supabaseKey);

document.getElementById('login-form').addEventListener('submit', async (event) => {
    event.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    const { user, error } = await supabase.auth.signIn({
        email: email,
        password: password
    });

    const loginMessage = document.getElementById('login-message');
    if (error) {
        loginMessage.textContent = `Error: ${error.message}`;
    } else {
        loginMessage.textContent = 'Login successful!';
        // Redirect to admin dashboard or order management page
        window.location.href = 'admin.html';
    }
});