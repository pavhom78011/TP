package com.example.calculate_function;

import android.os.Bundle;
import android.view.View;
import android.widget.Button;
import android.widget.TextView;
import android.view.GestureDetector;
import android.view.MotionEvent;
import android.view.animation.Animation;
import android.view.animation.AnimationUtils;

import androidx.appcompat.app.AppCompatActivity;

public class SecondActivity extends AppCompatActivity {
    GestureDetector gestureDetector;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_second);

        gestureDetector = new GestureDetector(this, new GestureDetector.SimpleOnGestureListener() {
            @Override
            public boolean onFling(MotionEvent e1, MotionEvent e2, float velocityX, float velocityY) {
                if (e2.getX() - e1.getX() > 150) {
                    finish();
                    return true;
                }
                return false;
            }
        });

        TextView resultTextView = findViewById(R.id.textViewResult);
        Button enter_Button = findViewById(R.id.backButton);

        double result = getIntent().getDoubleExtra("result", 0);
        resultTextView.setText("Результат вычисления:\nY = " + result);

        Animation anim = AnimationUtils.loadAnimation(this, R.anim.fade_in);
        resultTextView.startAnimation(anim);

        enter_Button.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                finish();
            }
        });
    }

    @Override
    public boolean onTouchEvent(MotionEvent event) {
        return gestureDetector.onTouchEvent(event) || super.onTouchEvent(event);
    }
}
