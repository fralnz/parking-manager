import React from 'react';
import { View, Text} from 'react-native';
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2'

const supabaseUrl = 'https://yuyyujadubndgfpxauug.supabase.co';
const supabaseKey = eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inl1eXl1amFkdWJuZGdmcHhhdXVnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTc2NjA4MzUsImV4cCI6MjAzMzIzNjgzNX0.V8bBPKuA3fXB10LcA1inEJRDAv96y-ePQaNdpaKO0yo;
const supabase = createClient(supabaseUrl, supabaseKey);

const MyComponent = () => {
    return (
        <View>
            <Text>Hello, React Native!</Text>
        </View>
    );
};


export default MyComponent;
