// Initialize Supabase
const supabaseUrl = 'https://wxkcwkkxxscsfwhbzypr.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Ind4a2N3a2t4eHNjc2Z3aGJ6eXByIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDA1Nzg5ODMsImV4cCI6MjA1NjE1NDk4M30.JVpWkVsyX2aOiAnQKB7vv0CcGEsfXumHi0FXohFsLiY';
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