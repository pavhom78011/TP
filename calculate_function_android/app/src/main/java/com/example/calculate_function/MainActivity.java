package com.example.calculate_function;

import android.content.Intent;
import android.os.Bundle;
import android.view.View;
import android.widget.Button;
import android.widget.CheckBox;
import android.widget.Toast;

import androidx.activity.EdgeToEdge;
import androidx.appcompat.app.AppCompatActivity;

import com.google.android.material.textfield.TextInputEditText;

public class MainActivity extends AppCompatActivity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        EdgeToEdge.enable(this);
        setContentView(R.layout.activity_main);

        TextInputEditText A_Text = findViewById(R.id.textInputEditTextA);
        TextInputEditText X_Text = findViewById(R.id.textInputEditTextX);
        Button enter_Button = findViewById(R.id.Enter_Button);
        Button function_Info = findViewById(R.id.function_info);
        CheckBox roundCheckBox = findViewById(R.id.checkBoxRound);

        enter_Button.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                try {
                    double a = Double.parseDouble(A_Text.getText().toString());
                    double x = Double.parseDouble(X_Text.getText().toString());

                    if (a == 0) {
                        Toast.makeText(MainActivity.this, "Недопустимая операция: деление на 0", Toast.LENGTH_LONG).show();
                        return;
                    }

                    double result = 3 + Math.pow(x, 3) / (7 * a * a) + x / 2;

                    if (roundCheckBox.isChecked()) {
                        result = Math.round(result);
                    }

                    Intent intent = new Intent(MainActivity.this, SecondActivity.class);
                    intent.putExtra("result", result);
                    startActivity(intent);

                } catch (Exception e) {
                    Toast.makeText(MainActivity.this, "Ошибка ввода данных", Toast.LENGTH_LONG).show();
                }
            }
        });

        function_Info.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                startActivity(new Intent(MainActivity.this, ComboBoxActivity.class));
            }
        });
    }
}