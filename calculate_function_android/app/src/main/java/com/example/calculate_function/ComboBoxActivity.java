package com.example.calculate_function;

import android.os.Bundle;
import android.view.View;
import android.widget.AdapterView;
import android.widget.ArrayAdapter;
import android.widget.Button;
import android.widget.Spinner;
import android.widget.TextView;
import androidx.appcompat.app.AppCompatActivity;

public class ComboBoxActivity extends AppCompatActivity {

    private TextView infoText;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_simple_combo);

        Button back_button = findViewById(R.id.Back);
        Spinner infoSpinner = findViewById(R.id.infoSpinner);
        infoText = findViewById(R.id.infoTextView);

        String[] items = {"Выберите информацию", "Описание функции", "Область определения", "Особые точки", "Поведение на бесконечности", "Производная функции", "Примеры вычислений"};

        ArrayAdapter<String> adapter = new ArrayAdapter<>(this, android.R.layout.simple_spinner_item, items);

        adapter.setDropDownViewResource(android.R.layout.simple_spinner_dropdown_item);
        infoSpinner.setAdapter(adapter);

        infoSpinner.setOnItemSelectedListener(new AdapterView.OnItemSelectedListener() {
            @Override
            public void onItemSelected(AdapterView<?> parent, android.view.View view, int position, long id) {
                String selected = parent.getItemAtPosition(position).toString();
                showInfo(selected);
            }

            @Override
            public void onNothingSelected(AdapterView<?> parent) {
                infoText.setText("Выберите пункт из списка");
            }
        });

        back_button.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                finish();
            }
        });
    }

    private void showInfo(String selected) {
        String text = "";

        switch(selected) {
            case "Описание функции":
                text = "Функция: Y = 3 + x³/(7a²) + x/2\n" +
                        "Это алгебраическая функция третьей степени.\n" +
                        "Состоит из константы (3), дробной части и линейной части.";
                break;

            case "Область определения":
                text = "Функция определена при всех действительных x,\n" +
                        "НО параметр a ≠ 0 (иначе деление на 0).\n" +
                        "a может быть любым действительным числом кроме 0.";
                break;

            case "Особые точки":
                text = "Особые точки:\n" +
                        "1. a = 0 - функция не определена\n" +
                        "2. x = 0 - Y = 3 (проходит через точку (0,3))\n" +
                        "3. При больших a функция стремится к y = 3 + x/2";
                break;

            case "Поведение на бесконечности":
                text = "При x → ∞: Y → ∞ (растет)\n" +
                        "При x → -∞: Y → -∞ (убывает)\n" +
                        "При a → ∞: Y → 3 + x/2 (упрощается)\n" +
                        "При a → 0: Y → ∞ (вертикальная асимптота)";
                break;

            case "Производная функции":
                text = "Производная по x:\n" +
                        "Y' = 3x²/(7a²) + 1/2\n\n" +
                        "Производная показывает скорость изменения функции.\n" +
                        "Всегда положительна при a ≠ 0.";
                break;

            case "Примеры вычислений":
                text = "Примеры:\n" +
                        "1. a=1, x=2: Y = 3 + 8/7 + 1 = 4 + 8/7 ≈ 5.14\n" +
                        "2. a=2, x=4: Y = 3 + 64/28 + 2 = 5 + 2.29 = 7.29\n" +
                        "3. a=0.5, x=1: Y = 3 + 1/(1.75) + 0.5 ≈ 3 + 0.57 + 0.5 = 4.07";
                break;

            default:
                text = "Выберите пункт из списка для получения информации о функции Y = 3 + x³/(7a²) + x/2";
        }

        infoText.setText(text);
    }
}