import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// Initial state for user
const initialState = {
  country: '',
  display_name: '',
  email: '',
  explicit_content: {
    filter_enabled: false,
    filter_locked: false,
  },
  external_urls: {
    spotify: '',
  },
  followers: {
    href: null,
    total: 0,
  },
  href: '',
  id: '',
  images: [],
  product: '',
  type: 'user',
  uri: '',
  status: 'idle', // additional state for tracking request status
  error: null,   // additional state for tracking error
};

// Async thunk for fetching user data
export const fetchUser = createAsyncThunk(
  'user/fetchUser',
  async (token, { rejectWithValue }) => {
    try {
      console.log('Token being used:', token); // Log the token being used
      const response = await fetch('https://api.spotify.com/v1/me', {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) {
        throw new Error(`Error fetching user data: ${response.status}`);
      }

      const data = await response.json();
      console.log('User data received:', data); // Log received data
      return data;
    } catch (error) {
      console.error('Error fetching user data:', error.message);
      // Handle specific errors (e.g., token expiration) appropriately
      return rejectWithValue(error.message);
    }
  }
);

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action) => {
      return { ...state, ...action.payload };
    },
    clearUser: () => initialState,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUser.pending, (state) => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase(fetchUser.fulfilled, (state, action) => {
        state.status = 'succeeded';
        console.log('Fulfilled payload:', action.payload); // Log fulfilled payload
        return { ...state, ...action.payload };
      })
      .addCase(fetchUser.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload;
      });
  },
});

export const { setUser, clearUser } = userSlice.actions;

export default userSlice.reducer;
