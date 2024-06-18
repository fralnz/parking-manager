import React, {useState} from "react";
import {StyleSheet, Text, TouchableOpacity, View} from "react-native";

interface DropdownProps {
    options: string[];
    onSelect: (option: string) => void;
}

const Dropdown: React.FC<DropdownProps> = ({ options, onSelect }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState<string | null>(null);

    const handleSelect = (option: string) => {
        setSelectedOption(option);
        setIsOpen(false);
        onSelect(option);
    };

    return (
        <View >
            <TouchableOpacity onPress={() => setIsOpen(!isOpen)} style={styles.dropdownButton}>
                <Text style={styles.dropdownButtonText}>{selectedOption || 'Seleziona la targa'}</Text>
            </TouchableOpacity>
            {isOpen && (
                <View style={styles.dropdownMenu}>
                    {options.map((option, index) => (
                        <TouchableOpacity key={index} onPress={() => handleSelect(option)} style={styles.dropdownItem}>
                            <Text style={styles.dropdownItemText}>{option}</Text>
                        </TouchableOpacity>
                    ))}
                </View>
            )}
        </View>
    );
};

export {Dropdown, styles};

const styles = StyleSheet.create({

    dropdownButton: {
        padding: 10,
        backgroundColor: '#155e85',
        borderRadius: 5,
        alignItems: 'center',
    },
    dropdownButtonText: {
        fontSize: 22,
        color: 'white',
    },
    dropdownMenu: {
        backgroundColor: 'white',
        borderWidth: 1,
        borderColor: '#ddd',
        borderRadius: 5,
        marginTop: 5,
    },
    dropdownItem: {
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#ddd',
    },
    dropdownItemText: {
        fontSize: 16,
    },
});