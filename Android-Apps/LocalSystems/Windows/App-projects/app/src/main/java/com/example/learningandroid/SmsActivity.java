package com.example.learningandroid;

import android.Manifest;
import android.content.pm.PackageManager;
import android.os.Bundle;
import android.telephony.SmsManager;
import android.view.View;
import android.widget.Button;
import android.widget.EditText;
import android.widget.Toast;

import androidx.annotation.NonNull;
import androidx.appcompat.app.AppCompatActivity;
import androidx.core.app.ActivityCompat;
import androidx.core.content.ContextCompat;

/*  This file has many errors
 *  reason: android studio needs to auto populate the red words below -- find out how before debugging.
 *  paused video @ 1:30:38
 */

public class SmsActivity extends AppCompatActivity {

    private EditText edtPhone,edtMessage;
    private Button btnSendSms;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_sms);

        edtPhone = findViewById(R.id.edt_phone);
        edtMessage = findViewById(R.id.edt_message);
        btnSendSms = findViewById(R.id.btn_send);

        btnSendSms.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                int permission = ContextCompat.checkSelfPermission(SmsActivity.this, Manifest.permission.SEND_SMS);

                if (permission == PackageManager.PERMISSION_GRANTED) {
                    // then we can send sms
                    sendSms();
                } else {
                    // we need ask the user for permission when the app starts
                    ActivityCompat.requestPermissions(SmsActivity.this, new String[]{Manifest.permission.SEND_SMS}, 5);
                }

            }


            });
        }

        @Override
        public void onRequestPermissionsResult(int requestCode, @NonNull  String[] permissions, @NonNull int[] grantResults) {
            switch (requestCode) {
                case 5:
                    if (grantResults[0] == PackageManager.PERMISSION_GRANTED) {
                        // then we can send SMS
                        sendSms();
                    } else {
                        Toast.makeText(SmsActivity.this, text:
                        "We need SMS permission", Toast.LENGTH_SHORT).show();
                    }
                    break;
                    default:
                    super.onRequestPermissionsResult(requestCode, permissions, grantResults);

            }
        }

        private void sendSms() {
                SmsManager smsManager = SmsManager.getDefault();
                smsManager.sendTextMessage(edtPhone.getText().toString().trim(), scAddress: null, edtMessage.getText().toString().trim(), sentIntent: null, deliveryIntent:null);
                Toast.makeText(context: this, text: "Message Sent !", Toast.LENGTH_SHORT).show();



        }


}