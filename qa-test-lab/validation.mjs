export function validateRegistration({name='',email='',password='',confirm=''}) {
 const errors=[];
 if(!name.trim()) errors.push('Full name is required.');
 if(!email.trim()) errors.push('Email is required.');
 else if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) errors.push('Enter a valid email address.');
 if(!password) errors.push('Password is required.');
 else if(password.length<8) errors.push('Password must be at least 8 characters.');
 if(password !== confirm) errors.push('Passwords do not match.');
 return {valid:errors.length===0, errors};
}
