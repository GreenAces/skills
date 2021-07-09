package com.example.learningandroid;

import android.os.Bundle;
import android.view.View;
import android.widget.Button;
import android.widget.ImageView;
import android.widget.TextView;

import androidx.appcompat.app.AppCompatActivity;

/**
 * Date 7/9/2021
 * Added songbird.jpg to MyApplication>app>src>main>res
 * video paused at 1:34:00
 * Code re-formatting should be applied to activity_listview.xml
 * Windows: Ctrl + Alt + L
 * Linux: Ctrl + Shift + Alt + L
 * error on activity_login_form.xml (maybe it's not linked to activity_login_form.java? debug later...)
 */

public class MainActivity extends AppCompatActivity implements View.OnClickListener {

    private TextView txtCounter;
    private Button btnPlus, btnMinus, btnReset, btnHideShow;
    private ImageView ivMeme;


    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        txtCounter = findViewById(R.id.txt_counter);
        btnPlus = findViewById(R.id.btn_plus);
        btnMinus = findViewById(R.id.btn_minus);
        btnReset = findViewById(R.id.btn_reset);
        ivMeme = findViewById(R.id.iv_meme);
        btnHideShow = findViewById(R.id.btn_hide_show);

        btnPlus.setOnClickListener(this);
        btnMinus.setOnClickListener(this);
        btnReset.setOnClickListener(this);

        btnHideShow.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                if (ivMeme.getVisibility() == View.VISIBLE) {
                    ivMeme.setVisibility(View.GONE);
                } else {
                    ivMeme.setVisibility(View.VISIBLE);
                }

            }


        });

    }

    @Override
    public void onClick(View v) {
        int id = v.getId();
        int counter =0;
        switch (id) {


            case R.id.btn_plus:

                counter = Integer.parseInt(txtCounter.getText().toString());
                counter++;
                txtCounter.setText(counter+"");


                break;

            case R.id.btn_minus:

                counter = Integer.parseInt(txtCounter.getText().toString());
                if (counter!=0) {
                    counter--;
                    txtCounter.setText(counter + "");
                }


                break;


            case R.id.btn_reset:

                txtCounter.setText("0");

                break;








        }
    }
}